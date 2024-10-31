import { css, keyframes } from '@emotion/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSpinner, FaCheckCircle, FaBan } from 'react-icons/fa'

// 按鈕樣式
const buttonStyle = css`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`

// 狀態區塊變色動畫
const fadeInOut = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

// 狀態顯示區塊樣式
const getStatusStyle = (status) => css`
  display: ${status === '' ? 'none' : 'flex'};
  align-items: center;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  color: white;
  animation: ${fadeInOut} 0.3s ease-in-out;
  background-color: ${status === '提取資料中'
    ? '#007bff'
    : status === '仍在取得資料中...'
    ? '#ffc107'
    : status.includes('提取完畢')
    ? '#28a745'
    : status === '提取失敗'
    ? '#dc3545'
    : '#007bff'};
  transition: background-color 0.5s ease;
`

// 列表樣式
const listStyle = css`
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
`

// 列表項目樣式
const listItemStyle = css`
  padding: 10px;
  background-color: #f8f9fa;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

// 定義動畫參數
const listItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
}

// 旋轉動畫
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

// 狀態顯示元件
function StatusDisplay({ status }) {
  return (
    <div css={getStatusStyle(status)}>
      {status === '提取資料中' && (
        <FaSpinner
          css={css`
            animation: ${spinAnimation} 1s linear infinite;
            margin-right: 8px;
          `}
        />
      )}
      {status === '仍在取得資料中...' && (
        <FaSpinner
          css={css`
            margin-right: 8px;
            animation: ${spinAnimation} 1s linear infinite;
          `}
        />
      )}
      {status.includes('提取完畢') && (
        <FaCheckCircle
          css={css`
            margin-right: 8px;
          `}
        />
      )}
      {status === '提取失敗' && (
        <FaBan
          css={css`
            margin-right: 8px;
          `}
        />
      )}
      {status}
    </div>
  )
}

function FetchButton({ onClick }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      提取資料
    </button>
  )
}

function ClearButton({ onClick }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      清空資料
    </button>
  )
}

function DataList({ data, status }) {
  return status ? (
    <ul css={listStyle}>
      <AnimatePresence>
        {data.map((item, index) => (
          <motion.li
            key={item.id}
            css={listItemStyle}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listItemVariants}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
          >
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  ) : null
}

function APIpractice() {
  const [status, setStatus] = useState('')
  const [data, setData] = useState([])

  const fetchData = async () => {
    setStatus('提取資料中')
    setData([])

    const timeout = setTimeout(() => {
      setStatus('仍在取得資料中...')
    }, 3000)

    try {
      const response = await new Promise((resolve) =>
        setTimeout(
          () => resolve(fetch('https://jsonplaceholder.typicode.com/posts')),
          5000
        )
      )

      if (!response.ok) throw new Error('資料提取失敗')

      const result = await response.json()
      clearTimeout(timeout)
      setStatus(`提取完畢，共 ${result.length} 筆資料`)
      setData(result.slice(0, 100))
    } catch (error) {
      clearTimeout(timeout)
      setStatus('提取失敗')
      console.error(error)
    }
  }

  const clearData = () => {
    setData([])
    setStatus('')
  }

  return (
    <div>
      <FetchButton onClick={fetchData} />
      <ClearButton onClick={clearData} />
      <StatusDisplay status={status} />
      <DataList data={data} status={status} />
    </div>
  )
}

export default APIpractice
