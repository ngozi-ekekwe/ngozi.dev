import styled from "styled-components";

function Profile() {
  return (
    <ProfileStyled>
      <Avatar id="profile"></Avatar>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: -100px;
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 2;
  background-image: url("/avatar.jpg");
  background-position: center;
  background-size: cover;
`;

export default Profile;
