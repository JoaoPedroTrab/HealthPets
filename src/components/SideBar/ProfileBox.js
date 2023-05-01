function ProfileBox() {
    const profile_image_src = "/logo193.jpg"


    return (
        <div className="profileBoxContainer">
            <img src={profile_image_src} alt="Foto de perfil" />
            <b>userName</b>
        </div>
    )
}

export default ProfileBox;