import { ReactElement } from "react"
import profile from "../assets/CV_PROFILE_PIC.png"
import Avatar from "@mui/material/Avatar"

export default function ProfileImage(): ReactElement {

    return (
        <Avatar variant={"rounded"} alt="The image" src={profile} style={{
            height: 233,
            width: 350,
            maxHeight: 233,
            maxWidth: 350,
            padding: "15px 30px 15px 30px",
            textAlign: "center",
        }} />
    )
}

