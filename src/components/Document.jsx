export default function Document({ title, detail }) {
  return <div className="document"><span className="pdf">PDF</span><div><b>{title}</b><small>{detail}</small></div><span className="add-file">Добавить файл</span></div>;
}
