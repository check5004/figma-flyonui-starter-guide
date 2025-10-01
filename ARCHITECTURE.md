# 🏗️ アーキテクチャ図 / Architecture Diagram

## 📊 システム構成図 / System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     🌐 ブラウザ / Browser                      │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          🎨 ユーザーインターフェース / UI            │   │
│  │                                                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │   │
│  │  │  🇯🇵 日本語   │  │  🇬🇧 English  │  │ 🇻🇳 Tiếng │ │   │
│  │  │    ボタン     │  │    Button    │  │   Việt   │ │   │
│  │  └──────────────┘  └──────────────┘  └──────────┘ │   │
│  │                                                       │   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │        📄 コンテンツエリア / Content Area       │ │   │
│  │  │                                                 │ │   │
│  │  │  • ヒーロー                                     │ │   │
│  │  │  • ナビゲーション                               │ │   │
│  │  │  • セクション1: イントロ                        │ │   │
│  │  │  • セクション2: 基本原則                        │ │   │
│  │  │  • セクション3: ハイブリッド戦略                │ │   │
│  │  │  • セクション4: プラグイン                      │ │   │
│  │  │  • セクション5: ワークフロー                    │ │   │
│  │  │  • セクション6: AIレビュー                      │ │   │
│  │  │  • セクション7: 命名規則                        │ │   │
│  │  │  • 最終セクション                               │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          💾 LocalStorage (ブラウザ保存)              │   │
│  │                                                       │   │
│  │  preferredLanguage: "ja" | "en" | "vi"              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼──────┐    ┌──────▼───────┐
            │  📄 HTML      │    │  🎨 CSS       │
            │  (index.html) │    │  (inline)     │
            └───────────────┘    └──────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
    ┌───▼──────┐        ┌──────▼─────────┐
    │ 📝 Data   │        │ ⚙️ Logic        │
    │(translations.js) │ │   (app.js)      │
    └───────────┘        └────────────────┘
```

## 🔄 データフロー / Data Flow

### 1. 初期ロード / Initial Load

```
1. ブラウザが index.html を読み込み
   │
   ▼
2. translations.js を読み込み（翻訳データ）
   │
   ▼
3. app.js を読み込み（アプリロジック）
   │
   ▼
4. DOMContentLoaded イベント発火
   │
   ▼
5. LocalStorage から言語設定を読み込み
   │
   ├─ 保存あり → その言語で表示
   └─ 保存なし → 日本語（デフォルト）で表示
   │
   ▼
6. renderContent(lang) 実行
   │
   ▼
7. ページに全コンテンツを表示
```

### 2. 言語切り替え / Language Switch

```
1. ユーザーが言語ボタンをクリック
   │
   ▼
2. switchLanguage(lang) 関数実行
   │
   ├─ currentLang を更新
   ├─ LocalStorage に保存
   ├─ アクティブボタンを更新
   └─ renderContent(lang) を呼び出し
   │
   ▼
3. translations[lang] から翻訳データ取得
   │
   ▼
4. HTMLテンプレートリテラルで生成
   │
   ▼
5. app.innerHTML に設定
   │
   ▼
6. 新しい言語のコンテンツが表示される
```

## 📁 ファイル依存関係 / File Dependencies

```
index.html
  │
  ├─── 読み込み → translations.js
  │                    │
  │                    └─ exports: translations { ja, en, vi }
  │
  └─── 読み込み → app.js
                     │
                     ├─ imports: translations
                     ├─ 定義: currentLang
                     ├─ 関数: switchLanguage()
                     ├─ 関数: renderContent()
                     ├─ 関数: getPrompts()
                     └─ 関数: copyToClipboard()
```

## 🎯 主要関数の役割 / Key Functions

### app.js の関数構成

```javascript
// 1. 初期化
document.addEventListener('DOMContentLoaded', function() { ... })
   ↓
   LocalStorageチェック → 言語設定
   ↓
   renderContent(lang)

// 2. 言語切り替え
switchLanguage(lang)
   ↓
   LocalStorage保存
   ↓
   ボタン更新
   ↓
   renderContent(lang)

// 3. コンテンツレンダリング
renderContent(lang)
   ↓
   translations[lang] 取得
   ↓
   HTMLテンプレート生成
   ↓
   app.innerHTML 更新

// 4. プロンプト取得
getPrompts(lang)
   ↓
   言語別プロンプトオブジェクト返却

// 5. コピー機能
copyToClipboard(elementId)
   ↓
   Clipboard API使用
   ↓
   アラート表示
```

## 🗂️ translations.js の構造

```javascript
const translations = {
  
  ja: {                          // 日本語
    hero_title: "...",
    hero_subtitle: "...",
    // ... 約200個のキー
  },
  
  en: {                          // 英語
    hero_title: "...",
    hero_subtitle: "...",
    // ... 同じキー構成
  },
  
  vi: {                          // ベトナム語
    hero_title: "...",
    hero_subtitle: "...",
    // ... 同じキー構成
  }
  
}
```

### キーの命名規則

```
[セクション]_[要素]_[詳細]

例:
- hero_title          : ヒーローセクションのタイトル
- nav_intro           : ナビゲーションのイントロリンク
- basics_1_title      : 基本原則の1番目のタイトル
- hybrid_step1_1      : ハイブリッド戦略のステップ1の1項目
- figmamcp_what_desc  : FigmaMCPの説明文
```

## 🔗 イベントフロー / Event Flow

```
┌──────────────┐
│  Page Load   │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ DOMContentLoaded │
└──────┬───────────┘
       │
       ▼
┌─────────────────────┐
│ Check LocalStorage  │
└──────┬──────────────┘
       │
       ├─ saved? → currentLang = saved
       └─ none?  → currentLang = 'ja'
       │
       ▼
┌──────────────────┐
│ renderContent()  │
└──────────────────┘


┌──────────────────┐
│ Click Lang Btn   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ switchLanguage() │
└──────┬───────────┘
       │
       ├─ save to LocalStorage
       ├─ update button style
       └─ renderContent()
       │
       ▼
┌──────────────────┐
│ Content Updated  │
└──────────────────┘


┌──────────────────┐
│ Click Copy Btn   │
└──────┬───────────┘
       │
       ▼
┌─────────────────────┐
│ copyToClipboard()   │
└──────┬──────────────┘
       │
       ├─ get text from element
       ├─ copy to clipboard
       └─ show alert
       │
       ▼
┌──────────────────┐
│ Alert Displayed  │
└──────────────────┘
```

## 🎨 CSS アーキテクチャ / CSS Architecture

### レイアウトシステム

```
.container (max-width: 1400px)
  │
  ├─ .hero (gradient background)
  │   ├─ h1 (title)
  │   ├─ .subtitle
  │   ├─ .target
  │   └─ .badge × N
  │
  ├─ nav (sticky)
  │   └─ ul > li × 7
  │
  └─ .content
      └─ section × 10
          ├─ h2 (section title)
          ├─ .grid-2 / .grid-3
          ├─ .card × N
          ├─ .info-box / .warning-box / .success-box
          └─ table / .file-structure / etc.
```

### コンポーネントクラス

```css
/* レイアウト */
.container          : メインコンテナ
.grid-2            : 2カラムグリッド
.grid-3            : 3カラムグリッド

/* セクション */
.hero              : ヒーローセクション
.final-section     : 最終セクション

/* カード */
.card              : 基本カード
.plugin-card       : プラグインカード
.phase-box         : フェーズボックス

/* 情報ボックス */
.info-box          : 情報（青）
.warning-box       : 警告（赤）
.success-box       : 成功（緑）
.beginner-tip      : 初心者向け（黄）
.strategy-box      : 戦略（グレー）

/* UI要素 */
.badge             : バッジ
.lang-switcher     : 言語切り替え
.lang-btn          : 言語ボタン
.copy-button       : コピーボタン
.prompt-box        : プロンプトボックス
```

## 🔐 LocalStorage スキーマ

```javascript
// キー: preferredLanguage
// 値: "ja" | "en" | "vi"

localStorage.getItem('preferredLanguage')
// → "ja"  (日本語)
// → "en"  (英語)
// → "vi"  (ベトナム語)
// → null  (未設定)
```

## 🌍 多言語対応の仕組み

### 翻訳キーのマッピング

```
HTML Template (app.js)          Translation Data (translations.js)
─────────────────────          ──────────────────────────────────
${t.hero_title}        ────────→ ja: "🚀 FlyonUI × Figma ..."
                                 en: "🚀 FlyonUI × Figma ..."
                                 vi: "🚀 Hướng dẫn ..."

${t.nav_intro}         ────────→ ja: "はじめに"
                                 en: "Introduction"
                                 vi: "Giới thiệu"

${t.basics_1_title}    ────────→ ja: "1. 整理された..."
                                 en: "1. Organized..."
                                 vi: "1. Quy tắc..."
```

## 📊 パフォーマンス最適化

### 実装された最適化

1. **遅延読み込み不要**
   - 全データが最初から読み込まれる
   - 小〜中規模のコンテンツに最適

2. **LocalStorage活用**
   - 言語設定を永続化
   - サーバーリクエスト不要

3. **インラインCSS**
   - 外部CSSファイル不要
   - HTTPリクエスト削減

4. **Vanilla JavaScript**
   - フレームワーク不要
   - 軽量で高速

### ロード時間の内訳

```
┌─────────────────────────────────┐
│ HTML (index.html)        : ~15KB │
│ Translations (translations.js) : ~80KB │
│ App Logic (app.js)       : ~20KB │
│ Total                    : ~115KB│
└─────────────────────────────────┘
                ↓
        約0.5秒で完全ロード
        （標準的な接続速度）
```

## 🔄 拡張性 / Extensibility

### 新言語追加の手順

```
1. translations.js に言語追加
   ├─ 新しい言語コード (例: ko, zh, th)
   └─ 全キーの翻訳

2. index.html にボタン追加
   └─ <button onclick="switchLanguage('ko')">

3. （オプション）app.js でデフォルト言語ロジック調整
```

### 新セクション追加の手順

```
1. translations.js に翻訳追加
   ├─ ja: { new_section_title: "..." }
   ├─ en: { new_section_title: "..." }
   └─ vi: { new_section_title: "..." }

2. app.js の renderContent() に追加
   └─ <section id="new">
        <h2>${t.new_section_title}</h2>
        ...
      </section>

3. ナビゲーションに追加
   └─ <li><a href="#new">${t.nav_new}</a></li>
```

## 🔍 デバッグ方法 / Debugging

### ブラウザ開発者ツール

```javascript
// コンソールで現在の言語確認
console.log(currentLang)
// → "ja" or "en" or "vi"

// 翻訳データ確認
console.log(translations.ja.hero_title)
// → "🚀 FlyonUI × Figma 初心者のための実践ガイド"

// LocalStorage確認
console.log(localStorage.getItem('preferredLanguage'))
// → "ja" or "en" or "vi" or null
```

### よくあるエラーと対処法

```
Error: Cannot read property 'hero_title' of undefined
→ translations.js が読み込まれていない
  解決: ファイルパスを確認

Error: switchLanguage is not defined
→ app.js が読み込まれていない
  解決: <script src="app.js"> の順序を確認

Alert が表示されない（コピー機能）
→ Clipboard API が使えない環境
  解決: HTTPS または localhost で実行
```

## 📈 スケーラビリティ / Scalability

### 現在の制限と対応

| 項目 | 現在 | 制限 | 大規模化の対策 |
|------|------|------|--------------|
| 言語数 | 3 | 10程度まで | 遅延読み込み実装 |
| セクション数 | 10 | 20程度まで | ページ分割 |
| 翻訳キー数 | ~200 | 500程度まで | 階層化・モジュール分割 |
| ファイルサイズ | 115KB | 500KB程度まで | 分割読み込み |

### 大規模化への移行パス

```
Phase 1 (現在): 静的多言語サイト
  ↓
Phase 2: 動的読み込み
  ├─ 翻訳ファイルを分割
  └─ 必要な言語のみ読み込み
  ↓
Phase 3: SSG/SSR
  ├─ Next.js / Nuxt.js 導入
  └─ 各言語の静的ファイル生成
  ↓
Phase 4: CMS連携
  ├─ Headless CMS導入
  └─ 翻訳管理の効率化
```

---

## 🎯 まとめ / Summary

このアーキテクチャは以下の特徴を持ちます:

✅ **シンプル**: 3ファイル構成で理解しやすい  
✅ **高速**: 外部依存なしで瞬時にロード  
✅ **拡張可能**: 新言語・新コンテンツの追加が容易  
✅ **保守性**: 翻訳データとロジックが分離  
✅ **ユーザー体験**: LocalStorageで設定永続化  

中小規模の技術ドキュメントに最適なアーキテクチャです。
