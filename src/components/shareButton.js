import React from 'react';

const ShareButton = ({ shareUrl, title }) => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: shareUrl,
      })
        .then(() => {
          console.log('Shared successfully');
        })
        .catch((error) => {
          console.error('Share failed', error);
        });
    } else {
      // Fallback for unsupported browsers
      const shareText = `${title} - ${shareUrl}`;
      try {
        navigator.clipboard.writeText(shareText);
        console.log('Copied to clipboard:', shareText);
      } catch (error) {
        console.error('Copy failed', error);
      }
    }
  };

  return (
    <button
      onClick={handleShareClick}
      className="flex h-[3.06rem] w-[9rem] cursor-pointer items-center justify-center gap-2 rounded-[1.25rem] border-[0.5px] border-solid border-primary-blue bg-white text-primary-blue"
    >
      <img className="h-[1.38rem] w-[1.19rem]" alt="share button" src="images/share.svg" />
      Share
    </button>
  );
};

export default ShareButton;
