export default function CatName({ catName, setCatName }) {
  return (
    <div>
      <p>{catName}</p>
      {/* Auch Setter-Funktionen können an Child-Komponenten weitergegeben werden */}
      <input type='text' onChange={(e) => setCatName(e.target.value)} value={catName} />
    </div>
  );
}
