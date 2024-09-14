
function Header(){
    return(
        <header className="p-6 shadow-md bg-blue-50">
      <div className="container mx-auto flex items-center justify-between">
        <a className="font-bold text-[30px]" href="/">Countries</a>
        <div className="flex items-center gap-10">
       <button>Dark mode</button>

        </div>
      </div>
    </header>
    );
}

export default Header