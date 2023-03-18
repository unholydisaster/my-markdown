import styled from 'styled-components';

const SidebarContainer = styled.div`
   display:none;
   
  @media (max-width: 768px) {
    width: 90vw;
    height:100vh;
    position: fixed;
    top:70px;
    left: 0;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <h2>Sidebar</h2>
      <p>Some content goes here.</p>
    </SidebarContainer>
  );
};

export default Sidebar;
