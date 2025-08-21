
export default function PesanUser({onClick}) {
  return (
    
       <>
      <div className=" bg-red-200 flex justify-center h-full">
        <form action="" className="w-md bg-blue-200 flex-col p-2 flex justify-center">
          <input type="text" placeholder="Nama" className="p-2 border" />
          <input type="text" placeholder="Pesan" className="p-2 border" />
          <button onClick={onClick}>Kirim</button>
        </form>
      </div>
    </>
  )
}