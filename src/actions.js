
export const POST = "POST_DATA";

export function post(data) {
  return { type: POST, payload: data };
}