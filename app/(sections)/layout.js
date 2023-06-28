import Header from "@/components/header";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
