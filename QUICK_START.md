# 🚀 クイックスタートガイド / Quick Start Guide

## 📦 必要なもの / Requirements

- ✅ モダンなWebブラウザ（Chrome, Firefox, Safari, Edge）
- ✅ （オプション）Python 3.x（ローカルサーバー用）

## ⚡ 30秒で起動 / 30-Second Setup

### 方法1: ファイルを直接開く（最も簡単）

1. `index.html` をダブルクリック
2. ブラウザで自動的に開きます
3. 完了！🎉

### 方法2: ローカルサーバーで起動（推奨）

```bash
# ターミナルでこのディレクトリに移動
cd /workspace

# Pythonのhttp.serverを起動
python3 -m http.server 8000

# ブラウザで以下を開く
# http://localhost:8000
```

## 🌍 言語を切り替える / Switch Language

1. **ページ右上**のボタンをクリック
   - 🇯🇵 `日本語` = 日本語
   - 🇬🇧 `English` = 英語
   - 🇻🇳 `Tiếng Việt` = ベトナム語

2. 全コンテンツが即座に切り替わります

3. 選択した言語は自動保存されます

## 📋 ファイル構成 / File Structure

```
📁 /workspace
  ├── 📄 index.html          ← メインファイル（これを開く）
  ├── 📄 translations.js     ← 翻訳データ
  ├── 📄 app.js             ← アプリケーションロジック
  ├── 📖 README.md          ← 詳細な使い方
  ├── 📖 実装完了報告.md      ← 実装内容の説明
  ├── 📖 IMPLEMENTATION_NOTES.md ← 技術詳細
  └── 📖 TEST_GUIDE.md      ← テスト手順
```

## ✅ 動作確認 / Verification

### 言語切り替えテスト

1. ページを開く
2. 右上の「English」をクリック
3. 全テキストが英語に変わる ✅
4. 「Tiếng Việt」をクリック
5. 全テキストがベトナム語に変わる ✅
6. 「日本語」をクリック
7. 全テキストが日本語に戻る ✅

### LocalStorageテスト

1. 言語を「English」に切り替え
2. ページをリロード（F5）
3. 英語のまま表示される ✅

### プロンプトコピーテスト

1. 「AIレビュー」セクションまでスクロール
2. 任意のプロンプトの「📋 コピー」をクリック
3. アラートが表示される ✅
4. テキストエディタに貼り付け ✅

## 🎯 主要セクション / Main Sections

| セクション | 内容 | 重要度 |
|-----------|------|--------|
| 📖 イントロ | ガイドの目的と対象者 | ⭐⭐⭐ |
| ✅ 基本原則 | Figma設計の6原則 | ⭐⭐⭐⭐⭐ |
| 🔄 ハイブリッド戦略 | FlyonUI活用法 | ⭐⭐⭐⭐⭐ |
| 🔌 プラグイン | 必須ツール6選 | ⭐⭐⭐⭐ |
| 📋 ワークフロー | 1週間の進め方 | ⭐⭐⭐⭐⭐ |
| 🤖 AIレビュー | FigmaMCP活用 | ⭐⭐⭐⭐ |
| 🏷️ 命名規則 | ベストプラクティス | ⭐⭐⭐⭐ |

## 🔧 トラブルシューティング / Troubleshooting

### Q1: 言語が切り替わらない

**A:** ブラウザのJavaScriptが有効か確認してください。

```
Chrome: 設定 > プライバシーとセキュリティ > サイトの設定 > JavaScript
```

### Q2: スタイルが崩れる

**A:** 以下を確認:
- ブラウザが最新版か
- `index.html`, `translations.js`, `app.js` が同じフォルダにあるか

### Q3: LocalStorageが動作しない

**A:** プライベートブラウジングモード（シークレットモード）では動作しません。通常モードで開いてください。

### Q4: ローカルサーバーが起動しない

**A:** Python 3がインストールされているか確認:

```bash
python3 --version
# または
python --version
```

## 📚 詳細ドキュメント / Detailed Docs

より詳しい情報は以下を参照:

- 📖 [README.md](README.md) - 基本的な使い方
- 📖 [実装完了報告.md](実装完了報告.md) - 実装内容の詳細
- 📖 [IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md) - 技術仕様
- 📖 [TEST_GUIDE.md](TEST_GUIDE.md) - テスト手順

## 🎨 カスタマイズ / Customization

### 新しい言語を追加

1. `translations.js` を開く
2. 新しい言語オブジェクトを追加:

```javascript
const translations = {
  ja: { /* 日本語 */ },
  en: { /* 英語 */ },
  vi: { /* ベトナム語 */ },
  ko: { // 韓国語を追加
    hero_title: "새로운 타이틀",
    // ...
  }
};
```

3. `index.html` にボタンを追加:

```html
<button class="lang-btn" onclick="switchLanguage('ko')" id="lang-ko">한국어</button>
```

### スタイルを変更

`index.html` の `<style>` タグ内を編集:

```css
/* プライマリカラーを変更 */
.hero {
    background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%);
}
```

## 🌟 よくある使い方 / Common Use Cases

### 1. チームメンバーに共有

```bash
# ZIPファイルを作成
zip -r flyonui-guide.zip .

# メール添付 or チャットで共有
```

### 2. 社内Wikiに掲載

```bash
# ファイルを社内サーバーにアップロード
scp -r . user@server:/var/www/html/flyonui-guide/
```

### 3. GitHub Pagesで公開

```bash
# GitHubリポジトリを作成
git init
git add .
git commit -m "Initial commit"
git push origin main

# Settings > Pages で公開設定
```

## 💡 Tips & Tricks

### 効率的な学習方法

1. **最初の1週間**: [実践ワークフロー](#workflow)セクションに従う
2. **困ったとき**: [AIレビュー](#figma-mcp)セクションのプロンプトを使う
3. **命名に迷ったら**: [命名規則](#naming)セクションを参照

### ショートカット

- `Ctrl/Cmd + F`: ページ内検索
- `F11`: フルスクリーン表示
- `Ctrl/Cmd + +/-`: 拡大/縮小

### ブックマーク推奨セクション

- 🔖 ハイブリッド戦略 (`#hybrid`)
- 🔖 実践ワークフロー (`#workflow`)
- 🔖 命名規則 (`#naming`)

## 🎉 準備完了！ / You're Ready!

これで多言語対応FlyonUI × Figmaガイドを使用する準備が整いました！

**次のステップ:**

1. ✅ `index.html` を開く
2. ✅ 好みの言語に切り替える
3. ✅ [実践ワークフロー](#workflow)から始める
4. ✅ FlyonUIで素晴らしいUIを作る！

**Happy Designing! 🎨✨**

---

<div align="center">

### 📞 サポート / Support

質問や問題があれば、お気軽にお問い合わせください。

Have questions? Feel free to reach out!

Có câu hỏi? Hãy liên hệ với chúng tôi!

</div>
