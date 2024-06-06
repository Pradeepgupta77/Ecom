"use Client"
import Image from "next/image"
import { useState } from "react";

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Image src="/menu.png" alt="" />
        </div>
    )
}
export default Menu;