export function Center({ children, styles }) {
  return (
    <div className={"max-w-screenn-2xl mx-auto my-0 px-6 py-0 " + styles}>
      {children}
    </div>
  );
}

export function BigCenter({ children, styles }) {
  return (
    <div className={"mx-auto my-0 max-w-screen-2xl " + styles}>{children}</div>
  );
}
