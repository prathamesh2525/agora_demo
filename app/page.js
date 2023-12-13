import NestedHoverMenu from "@/components/Dropdown"
import DropdownMenu from "@/components/Dropdown"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <section className="relative text-white">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full"
        muted
        autoPlay
        loop
      >
        <source src="home_vid.mp4" type="video/mp4" />
      </video>
      <section className="fixed top-0 bottom-0 w-full ">
        <Navbar />
      </section>
      {/* <NestedHoverMenu /> */}
    </section>
  )
}
