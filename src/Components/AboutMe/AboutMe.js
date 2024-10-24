import { css, keyframes } from '@emotion/react'
function Me() {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

  // 定義物件樣式
  const mainStyle = css({
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '2rem',
    color: '#333',
    animation: `${fadeIn} 1s ease-in` // 將動畫應用到這個樣式
  })

  const blockquoteStyle = css({
    margin: '20px auto',
    fontStyle: 'italic',
    color: '#555',
    borderLeft: '4px solid #ccc',
    paddingLeft: '10px',
    maxWidth: '600px',
    animation: `${fadeIn} 1s ease-in` // 也可以給 blockquote 加入相同的動畫
  })

  const sectionStyle = css({
    padding: '20px',
    margin: '20px 0',
    borderBottom: '1px solid #eee',
    h1: {
      fontSize: '1.8rem',
      marginBottom: '10px',
      color: '#444'
    },
    h2: {
      fontSize: '1.4rem',
      color: '#777'
    }
  })

  const footerStyle = css({
    textAlign: 'center',
    marginTop: '50px',
    padding: '10px',
    fontSize: '0.9rem',
    color: '#666',
    a: {
      textDecoration: 'none',
      color: '#007bff',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  })
  const containerStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr minmax(auto, 800px) 1fr', // 左右留白，中間最大寬度800px
    placeContent: 'center', // 水平和垂直置中
    minHeight: '100vh', // 保證容器至少佔滿整個視窗高度
    boxSizing: 'border-box'
  })

  const contentStyle = css({
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%', // 寬度佔滿 Grid 設置的中間區域
    maxWidth: '800px', // 最大寬度限制在800px
    gridColumn: '2'
  })

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <main css={mainStyle}>
          <h1>GET MY FIRST JOB</h1>
        </main>
        <blockquote css={blockquoteStyle}>
          <p>我是Ollie</p>
          <p>工作上有問題就問，解決事情是重點，無論面對的是什麼人。</p>
        </blockquote>

        <section css={sectionStyle}>
          <h1>元件</h1>
        </section>
        <section css={sectionStyle}>
          <h1>學習紀錄</h1>
          <h2>關於Elements</h2>
        </section>
        <section css={sectionStyle}>
          <h1>倉儲系統</h1>
        </section>
        <section css={sectionStyle}>
          <h1>關於我</h1>
        </section>

        <footer css={footerStyle}>
          bgm：
          <a
            href="https://www.youtube.com/watch?v=GlmwkPdkaN4"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              You are creating something no one can imagine | The imitation Game
              Soundtrack
            </u>
          </a>
        </footer>
      </div>
    </div>
  )
}
export default Me
