import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 768px) {
    width: 90vw;
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
