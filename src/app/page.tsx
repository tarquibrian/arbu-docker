import dynamic from 'next/dynamic';
import { NextPage } from "next";

const Map = dynamic(() => import('./Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Map />
    </div>
  )
}

export default Home
