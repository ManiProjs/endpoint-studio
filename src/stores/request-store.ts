import { create } from "zustand";

type RequestState = {
  url: string;
  response: string;
  status?: number;
  latency?: number;
  size?: number;
  loading: boolean;

  setUrl: (url: string) => void;
  sendRequest: () => Promise<void>;
};

export const useRequestStore = create<RequestState>((set, get) => ({
  url: "https://api.github.com/users",

  response: "",

  loading: false,

  setUrl: (url) => set({ url }),

  sendRequest: async () => {
    const url = get().url;

    if (!url.trim()) return;

    set({
      loading: true,

      response: "",

      status: undefined,

      latency: undefined,

      size: undefined,
    });

    const start = performance.now();

    try {
      const res = await fetch(url);

      const text = await res.text();

      const end = performance.now();

      set({
        response: text,

        status: res.status,

        latency: Math.round(end - start),

        size: new Blob([text]).size,
      });
    } catch (err: any) {
      set({
        response: String(err),

        status: 0,
      });
    } finally {
      set({ loading: false });
    }
  },
}));
