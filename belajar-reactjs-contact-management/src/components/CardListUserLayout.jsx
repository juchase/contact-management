export default function CardListUserLayout({ children }) {
  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
      {children}
    </div>
  );
}
