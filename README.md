# 銀行代碼查詢後端服務

## 專案簡介
這是一個基於 Node.js 和 Express 框架的後端服務，用於查詢銀行代碼和分行資訊，主要為bank-search專案所使用。服務會透過 API 代理請求第三方數據來源，並返回結果給前端使用者。

[Demo連結](https://bank-search-backend-production.up.railway.app/)

---

## 功能
1. 查詢所有銀行的基本資訊。
2. 根據銀行代碼查詢該銀行的所有分行資訊。

---

## 使用技術
- **Node.js**：運行環境。
- **Express**：後端框架。
- **Cors**：跨來源資源共享設置。

---

## API 路由

### 1. 查詢所有銀行
- **路由**：`GET /banks`
- **描述**：返回所有銀行的基本資訊。
- **範例響應**：
  ```json
  {
    "bank": [
      {
        "code": "005",
        "title": "臺灣土地銀行"
      },
      {
        "code": "006",
        "title": "合作金庫商業銀行"
      },
      {
        "code": "007",
        "title": "第一商業銀行"
      }
    ]
  }
  ```

### 2. 查詢指定銀行的分行資訊
- **路由**：`GET /banks/:code/branches`
- **描述**：根據銀行代碼查詢該銀行的所有分行資訊。
- **範例請求**：
  ```
  GET /banks/005/branches
  ```
- **範例響應**：
  ```json
  {
    "branches": [
      {
        "code": "0050027",
        "title": "基隆分行",
        "address": "基隆市義一路十八號1-4樓",
        "tel": "02-24210200"
      },
      {
        "code": "0050038",
        "title": "中和分行",
        "address": "新北市中和區景平路323號",
        "tel": "02-29461123"
      }
    ]
  }
  ```

---

## 本地運行
### 1. 安裝環境
請確保您的系統已安裝以下軟體：
- [Node.js](https://nodejs.org/) (建議版本 16.x 以上)

### 2. 安裝依賴
在專案目錄下運行以下指令：
```bash
npm install
```

### 3. 啟動服務
運行以下指令啟動服務：
```bash
node server.js
```

服務啟動後將運行在 `http://localhost:3030`。

---

## 注意事項
1. 本服務代理請求第三方 API：`https://bank.5xcamp.us/api/banks`。
2. 如第三方 API 無法訪問，可能導致查詢失敗。
3. 若需要進一步的功能拓展，請確保檢查服務的穩定性。

---

## 錯誤處理
### 常見錯誤
1. **第三方 API 無法訪問**：
   - 錯誤響應：
     ```json
     {
       "message": "something went wrong"
     }
     ```
   - 處理方式：檢查第三方 API 是否正常運行。
2. **無效的銀行代碼**：
   - 錯誤響應：
     ```json
     {
       "message": "something went wrong"
     }
     ```
   - 處理方式：確保傳入的銀行代碼正確。

---
