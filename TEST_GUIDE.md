# テスト手順 / Testing Guide / Hướng dẫn kiểm tra

## 🧪 動作確認方法 / How to Test / Cách kiểm tra

### 1. サイトを開く / Open the Site / Mở trang web

```bash
# ターミナルで実行 / Run in terminal / Chạy trong terminal
python3 -m http.server 8000
```

ブラウザで開く / Open in browser / Mở trong trình duyệt:
```
http://localhost:8000
```

### 2. 言語切り替えをテスト / Test Language Switching / Kiểm tra chuyển đổi ngôn ngữ

#### 日本語 → 英語 / Japanese → English

1. 右上の「English」ボタンをクリック
2. すべてのテキストが英語に変わることを確認
3. ページタイトルも英語に変わることを確認

#### 英語 → ベトナム語 / English → Vietnamese

1. 右上の「Tiếng Việt」ボタンをクリック
2. すべてのテキストがベトナム語に変わることを確認
3. ページタイトルもベトナム語に変わることを確認

#### ベトナム語 → 日本語 / Vietnamese → Japanese

1. 右上の「日本語」ボタンをクリック
2. すべてのテキストが日本語に戻ることを確認
3. ページタイトルも日本語に戻ることを確認

### 3. LocalStorage の確認 / Check LocalStorage / Kiểm tra LocalStorage

1. 言語を切り替える（例: 英語）
2. ページをリロード（F5）
3. 英語のまま表示されることを確認
4. ブラウザの開発者ツールを開く（F12）
5. Application > Local Storage > `http://localhost:8000` を確認
6. `preferredLanguage: "en"` が保存されていることを確認

### 4. セクションの完全性確認 / Check Section Completeness / Kiểm tra tính toàn vẹn

各言語で以下のセクションが正しく表示されることを確認:

#### ✅ チェックリスト / Checklist / Danh sách kiểm tra

- [ ] ヒーローセクション（タイトル、サブタイトル、バッジ）
- [ ] ナビゲーションメニュー（7項目）
- [ ] イントロダクション
  - [ ] 「こんな方のためのガイド」セクション
  - [ ] 「このガイドのゴール」カード（4枚）
- [ ] 基本原則
  - [ ] 6つの原則カード
- [ ] ハイブリッド戦略
  - [ ] 誤解セクション
  - [ ] 2ファイル構成
  - [ ] 比較表（3つのアプローチ）
  - [ ] 実装手順（5ステップ）
  - [ ] 重要なポイント
- [ ] 必須プラグイン
  - [ ] 6つのプラグインカード
- [ ] 実践ワークフロー
  - [ ] Day 1-2
  - [ ] Day 3-4
  - [ ] Day 5
  - [ ] Day 6-7
  - [ ] 達成すべきこと
- [ ] FigmaMCP活用
  - [ ] FigmaMCPとは
  - [ ] 使い方の流れ（4ステップ）
  - [ ] プロンプト集（5種類）
  - [ ] 効果的な使い方のコツ
  - [ ] トラブルシューティング
- [ ] 命名規則
  - [ ] 基本パターン表
  - [ ] FlyonUI対応の命名例
  - [ ] よくある失敗
  - [ ] 正しい命名
- [ ] 最終セクション
  - [ ] 応援メッセージ
  - [ ] 最初の一歩（6ステップ）

### 5. プロンプトのコピー機能テスト / Test Prompt Copy Function / Kiểm tra chức năng copy prompt

1. FigmaMCPセクションまでスクロール
2. 任意のプロンプトボックスの「📋 コピー」ボタンをクリック
3. アラートメッセージが表示されることを確認（言語に応じて異なる）
4. テキストエディタに貼り付けて、プロンプトが正しくコピーされたことを確認

### 6. レスポンシブデザインのテスト / Test Responsive Design / Kiểm tra thiết kế responsive

#### デスクトップ / Desktop

- [ ] 1400px幅で正常に表示
- [ ] グリッドが適切に表示
- [ ] 言語切り替えボタンが右上に固定

#### タブレット / Tablet

- [ ] 768px幅で正常に表示
- [ ] グリッドが2カラムに調整
- [ ] 言語切り替えボタンが表示

#### モバイル / Mobile

- [ ] 375px幅で正常に表示
- [ ] グリッドが1カラムに調整
- [ ] 言語切り替えボタンが縮小されるが、クリック可能

### 7. ブラウザ互換性テスト / Browser Compatibility Test / Kiểm tra tương thích trình duyệt

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 8. パフォーマンステスト / Performance Test / Kiểm tra hiệu suất

1. ブラウザの開発者ツールを開く（F12）
2. Network タブを確認
3. ページの読み込み時間を確認（通常 < 1秒）
4. 言語切り替え時の応答速度を確認（即座に切り替わる）

## 🐛 既知の問題 / Known Issues / Vấn đề đã biết

### なし / None / Không có

現時点で既知の問題はありません。

No known issues at this time.

Hiện tại không có vấn đề đã biết.

## 📸 期待される表示例 / Expected Display / Hiển thị mong đợi

### 日本語版 / Japanese Version

```
🚀 FlyonUI × Figma 初心者のための実践ガイド
大規模業務アプリ設計をいきなり任されたあなたへ
✨ Figma初心者 × 有料UIライブラリ × 本格的な開発現場での実践戦略
```

### 英語版 / English Version

```
🚀 FlyonUI × Figma Practical Guide for Beginners
For those suddenly tasked with large-scale business app design
✨ Figma Beginner × Paid UI Library × Real Development Environment Strategy
```

### ベトナム語版 / Vietnamese Version

```
🚀 Hướng dẫn thực hành FlyonUI × Figma cho người mới bắt đầu
Dành cho những người đột ngột được giao nhiệm vụ thiết kế ứng dụng doanh nghiệp quy mô lớn
✨ Người mới Figma × Thư viện UI trả phí × Chiến lược môi trường phát triển thực tế
```

## ✅ テスト完了の確認 / Test Completion Confirmation / Xác nhận hoàn thành kiểm tra

すべてのテスト項目が完了したら、このセクションにチェックを入れてください。

Check this section when all test items are completed.

Đánh dấu phần này khi tất cả các mục kiểm tra đã hoàn thành.

- [ ] 言語切り替え機能: 正常動作
- [ ] LocalStorage: 正常動作
- [ ] すべてのセクション: 表示確認済み
- [ ] プロンプトコピー: 正常動作
- [ ] レスポンシブデザイン: 確認済み
- [ ] ブラウザ互換性: 確認済み
- [ ] パフォーマンス: 問題なし

---

## 🎉 テスト成功! / Test Successful! / Kiểm tra thành công!

おめでとうございます！多言語Webサイトが正しく動作しています。

Congratulations! The multilingual website is working correctly.

Chúc mừng! Trang web đa ngôn ngữ đang hoạt động chính xác.
