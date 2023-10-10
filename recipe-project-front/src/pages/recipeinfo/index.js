import React from 'react';

function RecipeInfo() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '56.2225%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAFw2VXaQoA/watch?embed"
          allowFullScreen
          allow="fullscreen"
          title="Embedded Canva Design"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAFw2VXaQoA/watch?utm_content=DAFw2VXaQoA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        the world to your table by Daniella Wahab
      </a>
    </div>
  );
}

export default RecipeInfo;
