import { create } from "zustand";

type RequestStore = {
  url: string;
  response: string;
  loading: boolean;

  setUrl: (url: string) => void;
  setResponse: (res: string) => void;
  setLoading: (v: boolean) => void;

  sendRequest: () => Promise<void>;
};

export const useRequestStore = create<RequestStore>((set, get) => ({
  url: "https://api.github.com/users",

  response: "",
  loading: false,

  setUrl: (url) => set({ url }),
  setResponse: (response) => set({ response }),
  setLoading: (loading) => set({ loading }),

  sendRequest: async () => {
    const { url } = get();

    let parsed: URL;

    try {
        parsed = new URL(url);
    } catch {
        set({ response: "Invalid URL" });
        return;
    }

    set({ loading: true, response: "" });

    try {
      const res = await fetch(parsed.toString());
      const text = await res.text();

      set({ response: text });
    } catch (err: any) {
      set({ response: String(err) });
    } finally {
      set({ loading: false });
    }
  },
}));
