export function Center({ children, styles }) {
  return (
    <div
      className={
        "mx-auto my-0 max-w-screen-md px-6 py-0 md:max-w-screen-lg lg:max-w-screen-2xl " +
        styles
      }
    >
      {children}
    </div>
  );
}

export function BigCenter({ children, styles }) {
  return (
    <div
      className={
        "mx-auto my-0 max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl " +
        styles
      }
    >
      {children}
    </div>
  );
}
