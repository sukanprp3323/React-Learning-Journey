import { ProfileCard } from "./ProfileCard";

function Profile() {
    return (
        <>
            <h1>Profile Card Challange</h1>
            <ProfileCard
                name="sukan"
                age={30}
                gretting={
                    <>
                        <strong>Hi Sukan, have a wonderful day!</strong>
                    </>
                }
            >
                <p>Hobbies: Reading, hiking</p>
                <button>Contact Me</button>
            </ProfileCard>

            <ProfileCard
                name="Sixty9ine"
                age={20}
                gretting={
                    <>
                        <strong>Hi Sixty9ine, have a wonderful night!</strong>
                    </>
                }
            >
                <p>Hobbies: dancing, coding</p>
                <button>Contact Me</button>
            </ProfileCard>
        </>
    );
}

export default Profile;