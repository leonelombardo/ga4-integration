export const Button = ({ type="button", name="", onClick, children }) => {
    return <button type={type} name={name} onClick={onClick} className="py-2 px-4 bg-slate-800 shadow-inner shadow-slate-700 border-2 border-slate-800 text-slate-300 rounded-lg hover:brightness-110 transition-[filter] duration-300 flex-1">
        { children }
    </button>
}