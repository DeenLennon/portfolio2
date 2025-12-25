import React from 'react'

const styles = {
  wrapper: {
    width: "100%",
    height: "6px",
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  bar: {
    width: "40%",
    height: "100%",
    backgroundColor: "#3b82f6",
    animation: "loading 1.2s infinite ease-in-out",
  },
};

const LoadingBar = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.bar} />
    </div>
  )
}

export default LoadingBar