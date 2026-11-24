import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchGitHubActivity } from "@/lib/github";

describe("fetchGitHubActivity()", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns mapped activity objects on success", async () => {
    const mockEvents = [
      {
        type: "PushEvent",
        repo: { name: "daniellem62/portfolio" },
        payload: { commits: [{ message: "fix: nav bug" }] },
        created_at: "2025-03-01T12:00:00Z",
      },
    ];

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockEvents),
    } as Response);

    const result = await fetchGitHubActivity();

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      type: "PushEvent",
      repo: "daniellem62/portfolio",
      message: "fix: nav bug",
      date: expect.any(String),
    });
  });

  it("returns at most 5 events", async () => {
    const mockEvents = Array.from({ length: 10 }, (_, i) => ({
      type: "PushEvent",
      repo: { name: `daniellem62/repo-${i}` },
      payload: { commits: [{ message: `commit ${i}` }] },
      created_at: "2025-03-01T12:00:00Z",
    }));

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockEvents),
    } as Response);

    const result = await fetchGitHubActivity();

    expect(result).toHaveLength(5);
  });

  it("falls back to event type as message when there are no commits", async () => {
    const mockEvents = [
      {
        type: "CreateEvent",
        repo: { name: "daniellem62/portfolio" },
        payload: {},
        created_at: "2025-03-01T12:00:00Z",
      },
    ];

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockEvents),
    } as Response);

    const result = await fetchGitHubActivity();

    expect(result[0].message).toBe("CreateEvent");
  });

  it("returns an empty array when the response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    } as Response);

    const result = await fetchGitHubActivity();

    expect(result).toEqual([]);
  });

  it("returns an empty array when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("network error"));

    const result = await fetchGitHubActivity();

    expect(result).toEqual([]);
  });
});
