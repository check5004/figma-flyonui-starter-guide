# FlyonUI × Figma 実践ガイド (Multilingual Version)

このドキュメントは、FlyonUIとFigmaを使用した大規模業務アプリケーション設計のガイドです。

## 🌍 対応言語 / Supported Languages / Ngôn ngữ được hỗ trợ

- 🇯🇵 日本語 (Japanese)
- 🇬🇧 English
- 🇻🇳 Tiếng Việt (Vietnamese)

## ✨ 機能 / Features / Tính năng

### 言語切り替え機能 / Language Switching / Chuyển đổi ngôn ngữ

- ページ右上のボタンで言語を切り替え可能
- Language can be switched using buttons in the top right
- Có thể chuyển đổi ngôn ngữ bằng các nút ở góc trên bên phải

### コンテンツの完全性 / Content Integrity / Tính toàn vẹn nội dung

- すべてのコンテンツが3言語に翻訳されています
- All content is translated into 3 languages
- Tất cả nội dung đã được dịch sang 3 ngôn ngữ

### ローカルストレージ対応 / Local Storage Support / Hỗ trợ Local Storage

- 選択した言語設定は自動的に保存されます
- Selected language preference is automatically saved
- Cài đặt ngôn ngữ đã chọn được lưu tự động

## 📁 ファイル構成 / File Structure / Cấu trúc file

```
/workspace/
├── index.html          # メインHTMLファイル / Main HTML file / File HTML chính
├── translations.js     # 翻訳データ / Translation data / Dữ liệu dịch
├── app.js             # アプリケーションロジック / App logic / Logic ứng dụng
└── README.md          # このファイル / This file / File này
```

## 🚀 使い方 / Usage / Cách sử dụng

### ローカルで実行 / Run Locally / Chạy local

1. ファイルをダウンロード / Download files / Tải file xuống
2. ブラウザで `index.html` を開く / Open `index.html` in browser / Mở `index.html` trong trình duyệt

または / Or / Hoặc

```bash
# Webサーバーを起動 / Start web server / Khởi động web server
python3 -m http.server 8000

# ブラウザで開く / Open in browser / Mở trong trình duyệt
# http://localhost:8000
```

### 言語の追加方法 / Adding Languages / Thêm ngôn ngữ

`translations.js` ファイルに新しい言語オブジェクトを追加してください。

To add a new language, add a new language object to `translations.js`.

Để thêm ngôn ngữ mới, thêm đối tượng ngôn ngữ mới vào `translations.js`.

## 📝 技術仕様 / Technical Specifications / Đặc tả kỹ thuật

### 実装方式 / Implementation / Cách triển khai

- **静的サイト**: サーバーサイド処理不要 / Static site: No server-side processing / Site tĩnh: Không cần xử lý server-side
- **JavaScript**: Vanilla JavaScriptで実装 / Implemented in Vanilla JS / Được triển khai bằng Vanilla JS
- **ローカライゼーション**: JSONベースの翻訳管理 / JSON-based translation / Quản lý dịch dựa trên JSON

### ブラウザ対応 / Browser Support / Hỗ trợ trình duyệt

- Chrome (最新版 / Latest / Mới nhất)
- Firefox (最新版 / Latest / Mới nhất)
- Safari (最新版 / Latest / Mới nhất)
- Edge (最新版 / Latest / Mới nhất)

## 🎯 主な内容 / Main Content / Nội dung chính

1. **イントロダクション** / Introduction / Giới thiệu
2. **基本原則** / Basic Principles / Nguyên tắc cơ bản
3. **ハイブリッド戦略** / Hybrid Strategy / Chiến lược Hybrid
4. **必須プラグイン** / Essential Plugins / Plugin thiết yếu
5. **実践ワークフロー** / Practical Workflow / Quy trình thực hành
6. **AIレビュー** / AI Review / Đánh giá AI
7. **命名規則** / Naming Convention / Quy tắc đặt tên

## 🔧 カスタマイズ / Customization / Tùy chỉnh

### スタイルの変更 / Changing Styles / Thay đổi style

`index.html` 内の `<style>` タグを編集してください。

Edit the `<style>` tag in `index.html`.

Chỉnh sửa thẻ `<style>` trong `index.html`.

### コンテンツの追加 / Adding Content / Thêm nội dung

1. `translations.js` に翻訳を追加 / Add translations to `translations.js` / Thêm bản dịch vào `translations.js`
2. `app.js` でレンダリングロジックを更新 / Update rendering logic in `app.js` / Cập nhật logic render trong `app.js`

## 📄 ライセンス / License / Giấy phép

このドキュメントは自由に使用・改変できます。

This document is free to use and modify.

Tài liệu này có thể sử dụng và sửa đổi tự do.

## 🤝 貢献 / Contributing / Đóng góp

翻訳の改善や新機能の提案を歓迎します。

Translation improvements and feature suggestions are welcome.

Chào mừng cải thiện bản dịch và đề xuất tính năng mới.
