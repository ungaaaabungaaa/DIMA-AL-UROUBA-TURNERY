import { useEffect } from 'react';

const usePreventActions = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeydown = (event) => {
      if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled on this website.');
      }
    };

    const handleDragStart = (event) => {
      event.preventDefault();
    };

    const handleCopy = (event) => {
      event.preventDefault();
      alert('Copying content is disabled on this website.');
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);
};

export default usePreventActions;
