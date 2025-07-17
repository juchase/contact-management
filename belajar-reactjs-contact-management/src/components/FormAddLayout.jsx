export default function FormAddLayout({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
