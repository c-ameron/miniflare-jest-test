import { handleRequest } from "@/index";

test("Should get Hello World", async () => {
    const env = getMiniflareBindings();
    const res = await handleRequest(new Request("http://localhost"), env);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello World!");
  });