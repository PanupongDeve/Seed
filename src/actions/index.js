// CountTodo
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const reset = () => {
  return { type: "RESET_COUNTERS" };
};

export const plus = p => {
  return { type: "PLUS_COUNTERS", p };
};

export const addComment = data => {
  return { type: "ADD_COMMENT", data };
};
