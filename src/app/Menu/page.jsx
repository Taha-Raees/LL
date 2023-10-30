import "./Menu.scss"
import Image from "next/image";
import Link from "next/link";

const getData= async ()=>{
  const res = await fetch ("mtr-littlelemon.vercel.app/api/categories",{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}

const Menu = async () => {
  const menu = await getData()
  return (
    <div className="Category">
      <h1>Category</h1>
      <div className="menu-items">
      {menu.map((category) => (
       <div className="item" key={category.id} style={{ backgroundImage: `url(${category.img})`, backgroundSize: 'cover' }}>
        <Link href={'/Menu/${category.slug}'}>
        <h1>{category.title}</h1>
        <p>{category.desc}</p>
        <button>Explore</button>
       </Link>
       </div>
))}

      </div>
    </div>
  );
};

export default Menu;
