// take the application to the breakpoint, meaning the application should be pushed to the extreme limit of its capacity and it might crash
import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [{ duration: "2h", target: 10000 }],
};
export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}
