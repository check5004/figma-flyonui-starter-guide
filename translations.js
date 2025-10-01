const translations = {
  ja: {
    // Hero section
    hero_title: "🚀 FlyonUI × Figma 初心者のための実践ガイド",
    hero_subtitle: "大規模業務アプリ設計をいきなり任されたあなたへ",
    hero_target: "✨ Figma初心者 × 有料UIライブラリ × 本格的な開発現場での実践戦略",
    
    // Badges
    badge_flyonui: "FlyonUI",
    badge_hybrid: "ハイブリッド運用",
    badge_atomic: "Atomic Design",
    badge_beginner: "初心者OK",
    badge_ai: "AI活用",
    
    // Navigation
    nav_intro: "はじめに",
    nav_basics: "基本原則",
    nav_hybrid: "ハイブリッド戦略",
    nav_plugins: "必須プラグイン",
    nav_workflow: "実践ワークフロー",
    nav_figma_mcp: "AIレビュー",
    nav_naming: "命名規則",
    
    // Introduction section
    intro_title: "📖 このガイドについて",
    intro_for_who_title: "👋 こんな方のためのガイドです",
    intro_for_who_1: "Figmaを触るのは初めてだけど、いきなり大規模な業務アプリの設計を任された",
    intro_for_who_2: "FlyonUIという有料UIライブラリを使うことが決まっている",
    intro_for_who_3: "コンポーネント設計のベストプラクティスを知りたい",
    intro_for_who_4: "将来の拡張や変更に耐えられる設計にしたい",
    intro_for_who_5: "開発チームとの連携をスムーズにしたい",
    
    intro_goal_title: "🎯 このガイドのゴール",
    intro_goal_1_title: "即戦力になる",
    intro_goal_1_desc: "明日から実務で使える具体的な手順とテンプレートを提供します。",
    intro_goal_2_title: "破綻しない設計",
    intro_goal_2_desc: "プロジェクトの成長に耐えられる、拡張性のある設計方法を学びます。",
    intro_goal_3_title: "チーム連携",
    intro_goal_3_desc: "開発者との協業がスムーズになる構造を構築します。",
    intro_goal_4_title: "自信を持つ",
    intro_goal_4_desc: "なぜその方法が良いのか、理論と実践の両方を理解できます。",
    
    // Basics section
    basics_title: "✅ Figmaコンポーネント設計の6つの基本原則",
    basics_1_title: "1. 整理された命名規則と階層構造",
    basics_1_desc: "<strong>スラッシュ(/)</strong>でレイヤー名を区切り、アセットパネルでコンポーネントを自動グループ化します。",
    basics_1_note: "これにより、Assetsパネルで階層的に表示されます。",
    
    basics_2_title: "2. バリアントとプロパティの活用",
    basics_2_desc: "類似コンポーネントは<strong>バリアント</strong>として統合し、<strong>ブーリアンプロパティ</strong>や<strong>インスタンススワッププロパティ</strong>で柔軟性を高めます。",
    basics_2_item_1: "State: Default, Hover, Active",
    basics_2_item_2: "Size: Small, Medium, Large",
    basics_2_item_3: "Icon: Boolean (表示/非表示)",
    
    basics_3_title: "3. Auto Layoutの適用",
    basics_3_desc: "柔軟なレイアウトを実現し、コンテンツの変化に<strong>自動で対応</strong>させます。",
    basics_3_item_1: "Padding、Gap、Resizingを適切に設定",
    basics_3_item_2: "Min/Max Widthでレスポンシブ対応",
    
    basics_4_title: "4. アトミックデザインの考え方",
    basics_4_desc: "最小単位(Atoms)から段階的にコンポーネントを構築します。",
    basics_4_note: "Atoms → Molecules → Organisms → Templates → Pages",
    
    basics_5_title: "5. SSOT(Single Source of Truth)",
    basics_5_desc: "スタイルは<strong>ローカルスタイル</strong>(Color Styles、Text Styles)として定義し、一貫性を保ちます。",
    basics_5_note: "変数(Variables)も活用して、テーマ切り替えに対応。",
    
    basics_6_title: "6. チームライブラリの活用",
    basics_6_desc: "コンポーネントを<strong>チーム全体で共有</strong>し、作業効率と一貫性を向上させます。",
    basics_6_note: "Publishして他のファイルから参照できるようにします。",
    
    // Hybrid strategy section
    hybrid_title: "🔄 FlyonUIハイブリッド運用戦略(超重要!)",
    hybrid_misconception_title: "🤔 初心者が陥りがちな誤解",
    hybrid_misconception_wrong: "❌ 間違った認識:",
    hybrid_misconception_1: "「FlyonUIのコンポーネントをそのまま使えばOK」",
    hybrid_misconception_2: "「コピーしてデタッチすれば自由にカスタムできる」",
    hybrid_misconception_3: "「とりあえず全部FlyonUIから始めて、後で考えよう」",
    hybrid_misconception_warning: "⚠️ これらは後で大きな問題を引き起こします!",
    
    hybrid_solution_title: "✨ 正解:ハイブリッド戦略",
    hybrid_strategy_core_title: "🎯 戦略の核心",
    hybrid_strategy_core_desc: "FlyonUIのコード基盤との整合性を保ちつつ、管理の容易さとカスタマイズの柔軟性を両立させる",
    
    hybrid_2files_title: "📦 2ファイル構成",
    hybrid_file1_name: "01_DesignSystem - Master",
    hybrid_file1_desc: "FlyonUIライブラリへの依存を<span class=\"highlight-text\">ここに集約</span>。FlyonUIのインスタンスをデタッチせず、そのインスタンスを<strong>ラップ(コンポーネント化)</strong>して、自社独自のコンポーネントライブラリを作成。",
    hybrid_file2_name: "02_ProductUI",
    hybrid_file2_desc: "実際の画面デザインはこちらで行う。参照するライブラリは<span class=\"highlight-text\">自社の01_DesignSystemファイルのみ</span>。これにより、FlyonUIライブラリへの直接アクセスを遮断し、依存関係をシンプルに。",
    
    hybrid_comparison_title: "📊 比較:3つのアプローチ",
    hybrid_table_approach: "アプローチ",
    hybrid_table_pros: "メリット",
    hybrid_table_cons: "デメリット",
    hybrid_table_rating: "推奨度",
    
    hybrid_approach1_name: "❌ 直接使用",
    hybrid_approach1_sub: "FlyonUIを直接ProductUIで使用",
    hybrid_approach1_pros: "• 最も簡単<br>• すぐ開始可能",
    hybrid_approach1_cons: "• カスタマイズ困難<br>• 依存関係が複雑<br>• 管理が破綻しやすい",
    
    hybrid_approach2_name: "❌ 完全コピー",
    hybrid_approach2_sub: "FlyonUIをコピー&デタッチ",
    hybrid_approach2_pros: "• 完全に自由<br>• カスタマイズ無制限",
    hybrid_approach2_cons: "• アップデート不可<br>• コード連携メリット喪失<br>• パラメータが失われる",
    
    hybrid_approach3_name: "✅ ハイブリッド",
    hybrid_approach3_sub: "ラップ戦略で段階的に構築",
    hybrid_approach3_pros: "• 柔軟なカスタマイズ<br>• アップデート対応<br>• 依存関係が明確<br>• 段階的に移行可能<br>• コード連携維持",
    hybrid_approach3_cons: "• 初期セットアップが必要<br>• 概念理解が必要",
    
    hybrid_implementation_title: "🔧 ハイブリッド戦略の実装手順",
    hybrid_step1_title: "初期セットアップ",
    hybrid_step1_1: "01_DesignSystem - Masterファイルを作成",
    hybrid_step1_2: "FlyonUIライブラリを有効化",
    hybrid_step1_3: "基本スタイル(カラー、タイポグラフィ)を定義",
    
    hybrid_step2_title: "ProductUIでの作業開始",
    hybrid_step2_1: "02_ProductUIファイルを作成",
    hybrid_step2_2: "まずはFlyonUIライブラリを有効化",
    hybrid_step2_3: "FlyonUIのインスタンスを直接使用して画面設計開始",
    
    hybrid_step3_title: "カスタムが必要になった時",
    hybrid_step3_1: "01_DesignSystemで該当コンポーネントをラップ",
    hybrid_step3_2: "FlyonUIのインスタンスを配置",
    hybrid_step3_3: "それをコンポーネント化(デタッチしない!)",
    hybrid_step3_4: "必要ならバリアントプロパティを追加",
    
    hybrid_step4_title: "ProductUIでの置き換え",
    hybrid_step4_1: "02_ProductUIで自社ライブラリを有効化",
    hybrid_step4_2: "FlyonUIインスタンスを自社コンポーネントに置換",
    hybrid_step4_3: "段階的に移行していく",
    
    hybrid_step5_title: "最終段階",
    hybrid_step5_1: "02_ProductUIでFlyonUIライブラリを無効化",
    hybrid_step5_2: "自社ライブラリのみを参照",
    hybrid_step5_3: "クリーンな依存関係の完成!",
    
    hybrid_key_points_title: "💡 重要なポイント",
    hybrid_key_point1: "<strong>段階的なラップ:</strong>最初から全てのコンポーネントをラップする必要はありません。カスタムが必要になったものから順次対応。",
    hybrid_key_point2: "<strong>デタッチ禁止:</strong>カスタムが必要な場合も、デタッチではなくバリアントプロパティとして追加。",
    hybrid_key_point3: "<strong>一貫性の維持:</strong>デフォルト版もカスタム版も01_DesignSystemで一元管理。",
    hybrid_key_point4: "<strong>アップデート対応:</strong>FlyonUIのアップデートも自動的に反映される。",
    
    // Plugins section
    plugins_title: "🔌 作業効率を10倍にする必須プラグイン",
    
    plugin1_name: "🏷️ Rename It",
    plugin1_use: "<strong>用途:</strong>複数のレイヤーやコンポーネントを一括リネーム",
    plugin1_when: "<strong>使いどころ:</strong>命名規則を統一するとき。大量のコンポーネントを整理するとき。",
    plugin1_rating: "⭐ 初心者必須度: ★★★★★",
    
    plugin2_name: "🎨 Auto Variant Creator",
    plugin2_use: "<strong>用途:</strong>バリアントの自動生成",
    plugin2_when: "<strong>使いどころ:</strong>同じコンポーネントの異なる状態を素早く作成したいとき。",
    plugin2_rating: "⭐ 初心者必須度: ★★★★☆",
    
    plugin3_name: "🎯 Iconify",
    plugin3_use: "<strong>用途:</strong>10万種類以上のアイコンにアクセス",
    plugin3_when: "<strong>使いどころ:</strong>Material Icons、Font Awesome、Heroiconsなど、あらゆるアイコンをSVG形式で挿入。",
    plugin3_rating: "⭐ 初心者必須度: ★★★★★",
    
    plugin4_name: "🧹 Clean Document",
    plugin4_use: "<strong>用途:</strong>不要なリソースを削除",
    plugin4_when: "<strong>使いどころ:</strong>ファイルサイズが大きくなってきたとき。未使用のコンポーネントやスタイルを整理。",
    plugin4_rating: "⭐ 初心者必須度: ★★★☆☆",
    
    plugin5_name: "📊 Table Creator",
    plugin5_use: "<strong>用途:</strong>表形式のデータを簡単作成",
    plugin5_when: "<strong>使いどころ:</strong>業務アプリで頻出するデータテーブルを効率的に作成。CSVからのインポートも可能。",
    plugin5_rating: "⭐ 初心者必須度: ★★★★☆",
    
    plugin6_name: "🔍 Component Inspector",
    plugin6_use: "<strong>用途:</strong>未使用コンポーネントの検出",
    plugin6_when: "<strong>使いどころ:</strong>デザインシステムの棚卸しをするとき。不要なコンポーネントを特定。",
    plugin6_rating: "⭐ 初心者必須度: ★★★☆☆",
    
    // Workflow section
    workflow_title: "📋 実践ワークフロー:最初の1週間の進め方",
    
    workflow_day12_title: "Day 1-2:環境準備とFlyonUI理解",
    workflow_day12_1: "FlyonUIのドキュメントを読む(https://flyonui.com/docs/)",
    workflow_day12_2: "01_DesignSystem - Masterファイル作成",
    workflow_day12_3: "FlyonUIライブラリを追加",
    workflow_day12_4: "推奨プラグインをインストール",
    workflow_day12_5: "FlyonUIのコンポーネントを一通り触ってみる",
    
    workflow_day34_title: "Day 3-4:基本スタイルの定義",
    workflow_day34_1: "01_DesignSystemでColor Stylesを定義",
    workflow_day34_2: "Text Stylesを定義(見出し、本文、キャプションなど)",
    workflow_day34_3: "Variablesを活用してテーマ切り替えに対応(Light/Dark)",
    workflow_day34_4: "Spacing、Radius、Shadowの変数を定義",
    
    workflow_day5_title: "Day 5:ProductUIで実装開始",
    workflow_day5_1: "02_ProductUIファイル作成",
    workflow_day5_2: "FlyonUIライブラリを有効化",
    workflow_day5_3: "最初の画面をFlyonUIのコンポーネントで作成",
    workflow_day5_4: "まずは完璧を目指さず、とにかく作ってみる",
    
    workflow_day67_title: "Day 6-7:カスタマイズとラップ",
    workflow_day67_1: "カスタムが必要なコンポーネントをリストアップ",
    workflow_day67_2: "01_DesignSystemで1つずつラップ",
    workflow_day67_3: "バリアントプロパティを追加",
    workflow_day67_4: "02_ProductUIで置き換え",
    workflow_day67_5: "命名規則を統一(Rename Itプラグイン活用)",
    
    workflow_goals_title: "💡 最初の1週間で達成すべきこと",
    workflow_goal1: "✅ 2ファイル構成が理解できている",
    workflow_goal2: "✅ FlyonUIのコンポーネントを使って1画面作れる",
    workflow_goal3: "✅ 最低1つのコンポーネントをラップできた",
    workflow_goal4: "✅ 命名規則が統一されている",
    workflow_goal5: "✅ チームメンバーと共有できている",
    
    // Figma MCP section
    figmamcp_title: "🤖 FigmaMCPでAIレビューを活用する",
    
    figmamcp_what_title: "🔌 FigmaMCPとは?",
    figmamcp_what_desc: "FigmaMCPは、Figmaデスクトップアプリと連携して、選択したコンポーネントの情報をAI(Claude)が直接読み取れるようにするツールです。これにより、命名規則やコンポーネント構造を自動的にチェックできます。",
    figmamcp_what_setup: "<strong>セットアップガイド:</strong> <a href=\"https://help.figma.com/hc/ja/articles/32132100833559-Dev-Mode-MCP%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E5%88%A9%E7%94%A8%E3%82%AC%E3%82%A4%E3%83%89\" target=\"_blank\" style=\"color: #667eea;\">FigmaMCP 利用ガイド(公式)</a>",
    figmamcp_what_note: "※ Figmaデスクトップアプリのインストールが必要です",
    
    figmamcp_how_title: "📋 使い方の流れ",
    figmamcp_step1_title: "1. Figmaで選択",
    figmamcp_step1_desc: "レビューしたいコンポーネントやフレームをFigmaデスクトップアプリで選択します。",
    figmamcp_step2_title: "2. プロンプトをコピー",
    figmamcp_step2_desc: "以下のプロンプトをコピーして、ClaudeDesktopやCursorに貼り付けます。",
    figmamcp_step3_title: "3. AIが自動分析",
    figmamcp_step3_desc: "ClaudeがFigmaMCPを通じてコンポーネント情報を読み取り、自動的に分析します。",
    figmamcp_step4_title: "4. 改善提案を受け取る",
    figmamcp_step4_desc: "命名規則やベストプラクティスに基づいた具体的な改善提案が得られます。",
    
    figmamcp_prompts_title: "🎯 プロンプト集",
    
    prompt1_title: "💎 包括的コンポーネントレビュー",
    prompt1_desc: "コンポーネント全体を徹底的にチェックする包括的なプロンプトです。初めてレビューする際や、重要なコンポーネントの品質を確認したい時に使用します。",
    
    prompt2_title: "🏷️ 命名規則チェック(クイック版)",
    prompt2_desc: "命名規則だけを素早くチェックしたい時に使用します。大量のコンポーネントを効率的にレビューする際に便利です。",
    
    prompt3_title: "📐 Auto Layout構造チェック",
    prompt3_desc: "Auto Layoutの設定を詳しくチェックし、レスポンシブ性と保守性を評価します。",
    
    prompt4_title: "🎨 バリアント構造チェック",
    prompt4_desc: "バリアントを持つコンポーネントの設計品質を評価します。",
    
    prompt5_title: "🔄 FlyonUI統合チェック",
    prompt5_desc: "FlyonUIのコンポーネントを適切に活用できているかをチェックします。ハイブリッド戦略に沿った運用ができているかを確認します。",
    
    copy_button: "📋 コピー",
    
    figmamcp_tips_title: "💡 効果的な使い方のコツ",
    figmamcp_tip1: "<strong>定期的なレビュー:</strong> 新しいコンポーネントを作成したら、すぐにレビューする習慣をつけましょう。",
    figmamcp_tip2: "<strong>スラッシュコマンド化:</strong> ClaudeDesktopやCursorのスラッシュコマンドに登録すると、さらに効率的です。",
    figmamcp_tip3: "<strong>チームで共有:</strong> これらのプロンプトをチーム全体で共有し、品質基準を統一しましょう。",
    figmamcp_tip4: "<strong>段階的改善:</strong> 全ての指摘を一度に修正しようとせず、優先度をつけて対応しましょう。",
    figmamcp_tip5: "<strong>学習ツールとして:</strong> AIの指摘を読むことで、ベストプラクティスを学ぶことができます。",
    
    figmamcp_troubleshoot_title: "🔧 トラブルシューティング",
    figmamcp_q1: "<strong>Q: Claudeがコンポーネント情報を読み取れない</strong><br>A: FigmaMCPが正しくセットアップされているか、Figmaデスクトップアプリでコンポーネントが選択されているかを確認してください。",
    figmamcp_q2: "<strong>Q: レビュー結果が表示されない</strong><br>A: プロンプト全体がコピーされているか、ClaudeのコンテキストウィンドウがFigmaに接続されているかを確認してください。",
    figmamcp_q3: "<strong>Q: 改善提案が具体的でない</strong><br>A: プロンプトに「具体的な例を示して」「ステップバイステップで」などの指示を追加してみてください。",
    
    // Naming section
    naming_title: "🏷️ 命名規則:迷わないための黄金ルール",
    naming_basic_title: "基本パターン",
    
    naming_table_element: "要素",
    naming_table_pattern: "命名パターン",
    naming_table_example: "例",
    
    naming_component: "コンポーネント",
    naming_component_pattern: "Category/Type/Size/State",
    naming_component_example: "Button/Primary/Large/Default",
    
    naming_variant: "バリアント",
    naming_variant_pattern: "Property=Value",
    naming_variant_example: "State=Hover, Size=Medium",
    
    naming_variable: "変数",
    naming_variable_pattern: "category.type.name",
    naming_variable_example: "color.primary.500",
    
    naming_page: "ページ",
    naming_page_pattern: "番号_名前_状態",
    naming_page_example: "01_Dashboard_Final",
    
    naming_flyonui_title: "FlyonUI対応の命名例",
    
    naming_mistakes_title: "⚠️ よくある命名の失敗",
    naming_mistake1: "❌ <code>btn-primary-lg</code> → 略語は避ける",
    naming_mistake2: "❌ <code>Button_Primary_Large</code> → アンダースコアではなくスラッシュ",
    naming_mistake3: "❌ <code>ボタン/プライマリ/大</code> → 英語で統一",
    naming_mistake4: "❌ <code>Button/blue/big</code> → 色や見た目ではなく機能で命名",
    
    naming_correct_title: "✅ 正しい命名:",
    naming_correct1: "✅ <code>Button/Primary/Large/Default</code>",
    naming_correct2: "✅ <code>Input/Text/Medium/Disabled</code>",
    naming_correct3: "✅ <code>Card/Product/Horizontal/Hover</code>",
    
    // Final section
    final_title: "🎉 さあ、始めましょう!",
    final_message: "このガイドを参考に、一歩ずつ進めていけば大丈夫です。<br>完璧を目指さず、まずは手を動かして、失敗しながら学んでいきましょう。",
    final_first_step: "最初の一歩",
    final_step1: "FlyonUIのドキュメントを30分読む",
    final_step2: "01_DesignSystem - Masterファイルを作成",
    final_step3: "FlyonUIライブラリを追加",
    final_step4: "推奨プラグインを3つインストール",
    final_step5: "簡単な画面を1つ作ってみる",
    final_step6: "FigmaMCPをセットアップしてAIレビューを試す",
    final_support: "<strong>応援しています!🚀</strong>",
    
    copy_success: "プロンプトをコピーしました!",
    copy_error: "コピーに失敗しました: "
  },
  
  en: {
    // Hero section
    hero_title: "🚀 FlyonUI × Figma Practical Guide for Beginners",
    hero_subtitle: "For those suddenly tasked with large-scale business app design",
    hero_target: "✨ Figma Beginner × Paid UI Library × Real Development Environment Strategy",
    
    // Badges
    badge_flyonui: "FlyonUI",
    badge_hybrid: "Hybrid Approach",
    badge_atomic: "Atomic Design",
    badge_beginner: "Beginner Friendly",
    badge_ai: "AI Powered",
    
    // Navigation
    nav_intro: "Introduction",
    nav_basics: "Basic Principles",
    nav_hybrid: "Hybrid Strategy",
    nav_plugins: "Essential Plugins",
    nav_workflow: "Practical Workflow",
    nav_figma_mcp: "AI Review",
    nav_naming: "Naming Convention",
    
    // Introduction section
    intro_title: "📖 About This Guide",
    intro_for_who_title: "👋 This Guide is for You If:",
    intro_for_who_1: "You're new to Figma but suddenly tasked with designing a large-scale business app",
    intro_for_who_2: "You've been given FlyonUI, a paid UI library, to work with",
    intro_for_who_3: "You want to learn component design best practices",
    intro_for_who_4: "You want a design that can handle future expansion and changes",
    intro_for_who_5: "You want smooth collaboration with the development team",
    
    intro_goal_title: "🎯 Goals of This Guide",
    intro_goal_1_title: "Become Immediately Productive",
    intro_goal_1_desc: "We provide specific procedures and templates you can use in practice from tomorrow.",
    intro_goal_2_title: "Scalable Design",
    intro_goal_2_desc: "Learn design methods that can withstand project growth and expansion.",
    intro_goal_3_title: "Team Collaboration",
    intro_goal_3_desc: "Build a structure that facilitates smooth cooperation with developers.",
    intro_goal_4_title: "Gain Confidence",
    intro_goal_4_desc: "Understand both theory and practice of why these methods work.",
    
    // Basics section
    basics_title: "✅ 6 Basic Principles of Figma Component Design",
    basics_1_title: "1. Organized Naming Convention and Hierarchy",
    basics_1_desc: "Use <strong>slashes (/)</strong> to separate layer names and auto-group components in the Assets panel.",
    basics_1_note: "This displays components hierarchically in the Assets panel.",
    
    basics_2_title: "2. Utilize Variants and Properties",
    basics_2_desc: "Consolidate similar components as <strong>variants</strong> and enhance flexibility with <strong>boolean properties</strong> and <strong>instance swap properties</strong>.",
    basics_2_item_1: "State: Default, Hover, Active",
    basics_2_item_2: "Size: Small, Medium, Large",
    basics_2_item_3: "Icon: Boolean (show/hide)",
    
    basics_3_title: "3. Apply Auto Layout",
    basics_3_desc: "Achieve flexible layouts that <strong>automatically adapt</strong> to content changes.",
    basics_3_item_1: "Properly configure Padding, Gap, and Resizing",
    basics_3_item_2: "Use Min/Max Width for responsive design",
    
    basics_4_title: "4. Atomic Design Approach",
    basics_4_desc: "Build components incrementally from the smallest units (Atoms).",
    basics_4_note: "Atoms → Molecules → Organisms → Templates → Pages",
    
    basics_5_title: "5. SSOT (Single Source of Truth)",
    basics_5_desc: "Define styles as <strong>local styles</strong> (Color Styles, Text Styles) to maintain consistency.",
    basics_5_note: "Also use variables for theme switching support.",
    
    basics_6_title: "6. Use Team Libraries",
    basics_6_desc: "<strong>Share components</strong> across the team to improve work efficiency and consistency.",
    basics_6_note: "Publish to make them referenceable from other files.",
    
    // Hybrid strategy section
    hybrid_title: "🔄 FlyonUI Hybrid Strategy (Crucial!)",
    hybrid_misconception_title: "🤔 Common Beginner Misconceptions",
    hybrid_misconception_wrong: "❌ Wrong assumptions:",
    hybrid_misconception_1: "\"Just use FlyonUI components as-is and you're done\"",
    hybrid_misconception_2: "\"Copy and detach for free customization\"",
    hybrid_misconception_3: "\"Start with everything from FlyonUI and figure it out later\"",
    hybrid_misconception_warning: "⚠️ These will cause major problems later!",
    
    hybrid_solution_title: "✨ The Solution: Hybrid Strategy",
    hybrid_strategy_core_title: "🎯 Core Strategy",
    hybrid_strategy_core_desc: "Maintain alignment with FlyonUI's code foundation while balancing ease of management and customization flexibility",
    
    hybrid_2files_title: "📦 Two-File Structure",
    hybrid_file1_name: "01_DesignSystem - Master",
    hybrid_file1_desc: "<span class=\"highlight-text\">Consolidate</span> FlyonUI library dependencies here. Without detaching FlyonUI instances, <strong>wrap (componentize)</strong> them to create your own component library.",
    hybrid_file2_name: "02_ProductUI",
    hybrid_file2_desc: "Actual screen designs go here. Reference only <span class=\"highlight-text\">your own 01_DesignSystem file</span>. This blocks direct access to FlyonUI library and simplifies dependencies.",
    
    hybrid_comparison_title: "📊 Comparison: Three Approaches",
    hybrid_table_approach: "Approach",
    hybrid_table_pros: "Pros",
    hybrid_table_cons: "Cons",
    hybrid_table_rating: "Rating",
    
    hybrid_approach1_name: "❌ Direct Use",
    hybrid_approach1_sub: "Use FlyonUI directly in ProductUI",
    hybrid_approach1_pros: "• Easiest<br>• Quick start",
    hybrid_approach1_cons: "• Hard to customize<br>• Complex dependencies<br>• Management prone to failure",
    
    hybrid_approach2_name: "❌ Full Copy",
    hybrid_approach2_sub: "Copy & detach FlyonUI",
    hybrid_approach2_pros: "• Complete freedom<br>• Unlimited customization",
    hybrid_approach2_cons: "• No updates<br>• Lose code integration benefits<br>• Parameters lost",
    
    hybrid_approach3_name: "✅ Hybrid",
    hybrid_approach3_sub: "Gradual build with wrap strategy",
    hybrid_approach3_pros: "• Flexible customization<br>• Update compatible<br>• Clear dependencies<br>• Gradual migration<br>• Maintains code integration",
    hybrid_approach3_cons: "• Initial setup required<br>• Concept understanding needed",
    
    hybrid_implementation_title: "🔧 Hybrid Strategy Implementation Steps",
    hybrid_step1_title: "Initial Setup",
    hybrid_step1_1: "Create 01_DesignSystem - Master file",
    hybrid_step1_2: "Enable FlyonUI library",
    hybrid_step1_3: "Define basic styles (colors, typography)",
    
    hybrid_step2_title: "Start Working in ProductUI",
    hybrid_step2_1: "Create 02_ProductUI file",
    hybrid_step2_2: "First, enable FlyonUI library",
    hybrid_step2_3: "Start screen design using FlyonUI instances directly",
    
    hybrid_step3_title: "When Customization Needed",
    hybrid_step3_1: "Wrap target component in 01_DesignSystem",
    hybrid_step3_2: "Place FlyonUI instance",
    hybrid_step3_3: "Componentize it (don't detach!)",
    hybrid_step3_4: "Add variant properties if needed",
    
    hybrid_step4_title: "Replace in ProductUI",
    hybrid_step4_1: "Enable your library in 02_ProductUI",
    hybrid_step4_2: "Replace FlyonUI instances with your components",
    hybrid_step4_3: "Migrate gradually",
    
    hybrid_step5_title: "Final Stage",
    hybrid_step5_1: "Disable FlyonUI library in 02_ProductUI",
    hybrid_step5_2: "Reference only your library",
    hybrid_step5_3: "Clean dependencies complete!",
    
    hybrid_key_points_title: "💡 Key Points",
    hybrid_key_point1: "<strong>Gradual wrapping:</strong> No need to wrap all components from the start. Respond as customization becomes necessary.",
    hybrid_key_point2: "<strong>No detaching:</strong> Even when customization is needed, add as variant properties instead of detaching.",
    hybrid_key_point3: "<strong>Maintain consistency:</strong> Centrally manage both default and custom versions in 01_DesignSystem.",
    hybrid_key_point4: "<strong>Update compatibility:</strong> FlyonUI updates are automatically reflected.",
    
    // Plugins section
    plugins_title: "🔌 Essential Plugins to 10x Your Efficiency",
    
    plugin1_name: "🏷️ Rename It",
    plugin1_use: "<strong>Purpose:</strong> Batch rename multiple layers and components",
    plugin1_when: "<strong>Use when:</strong> Unifying naming conventions. Organizing large numbers of components.",
    plugin1_rating: "⭐ Beginner Essential: ★★★★★",
    
    plugin2_name: "🎨 Auto Variant Creator",
    plugin2_use: "<strong>Purpose:</strong> Auto-generate variants",
    plugin2_when: "<strong>Use when:</strong> Quickly creating different states of the same component.",
    plugin2_rating: "⭐ Beginner Essential: ★★★★☆",
    
    plugin3_name: "🎯 Iconify",
    plugin3_use: "<strong>Purpose:</strong> Access 100,000+ icons",
    plugin3_when: "<strong>Use when:</strong> Insert any icons like Material Icons, Font Awesome, Heroicons in SVG format.",
    plugin3_rating: "⭐ Beginner Essential: ★★★★★",
    
    plugin4_name: "🧹 Clean Document",
    plugin4_use: "<strong>Purpose:</strong> Remove unnecessary resources",
    plugin4_when: "<strong>Use when:</strong> File size grows. Organize unused components and styles.",
    plugin4_rating: "⭐ Beginner Essential: ★★★☆☆",
    
    plugin5_name: "📊 Table Creator",
    plugin5_use: "<strong>Purpose:</strong> Easily create tabular data",
    plugin5_when: "<strong>Use when:</strong> Efficiently create data tables common in business apps. CSV import possible.",
    plugin5_rating: "⭐ Beginner Essential: ★★★★☆",
    
    plugin6_name: "🔍 Component Inspector",
    plugin6_use: "<strong>Purpose:</strong> Detect unused components",
    plugin6_when: "<strong>Use when:</strong> Auditing design system. Identify unnecessary components.",
    plugin6_rating: "⭐ Beginner Essential: ★★★☆☆",
    
    // Workflow section
    workflow_title: "📋 Practical Workflow: Your First Week",
    
    workflow_day12_title: "Day 1-2: Setup and FlyonUI Understanding",
    workflow_day12_1: "Read FlyonUI documentation (https://flyonui.com/docs/)",
    workflow_day12_2: "Create 01_DesignSystem - Master file",
    workflow_day12_3: "Add FlyonUI library",
    workflow_day12_4: "Install recommended plugins",
    workflow_day12_5: "Try out all FlyonUI components",
    
    workflow_day34_title: "Day 3-4: Define Basic Styles",
    workflow_day34_1: "Define Color Styles in 01_DesignSystem",
    workflow_day34_2: "Define Text Styles (headings, body, captions, etc.)",
    workflow_day34_3: "Use Variables for theme switching (Light/Dark)",
    workflow_day34_4: "Define Spacing, Radius, Shadow variables",
    
    workflow_day5_title: "Day 5: Start ProductUI Implementation",
    workflow_day5_1: "Create 02_ProductUI file",
    workflow_day5_2: "Enable FlyonUI library",
    workflow_day5_3: "Create first screen with FlyonUI components",
    workflow_day5_4: "Don't aim for perfection, just start building",
    
    workflow_day67_title: "Day 6-7: Customize and Wrap",
    workflow_day67_1: "List components needing customization",
    workflow_day67_2: "Wrap them one by one in 01_DesignSystem",
    workflow_day67_3: "Add variant properties",
    workflow_day67_4: "Replace in 02_ProductUI",
    workflow_day67_5: "Unify naming conventions (use Rename It plugin)",
    
    workflow_goals_title: "💡 First Week Goals",
    workflow_goal1: "✅ Understand two-file structure",
    workflow_goal2: "✅ Create one screen using FlyonUI components",
    workflow_goal3: "✅ Successfully wrap at least one component",
    workflow_goal4: "✅ Unified naming conventions",
    workflow_goal5: "✅ Shared with team members",
    
    // Figma MCP section
    figmamcp_title: "🤖 Leverage AI Review with FigmaMCP",
    
    figmamcp_what_title: "🔌 What is FigmaMCP?",
    figmamcp_what_desc: "FigmaMCP is a tool that integrates with Figma Desktop app, allowing AI (Claude) to directly read information about selected components. This enables automatic checking of naming conventions and component structures.",
    figmamcp_what_setup: "<strong>Setup Guide:</strong> <a href=\"https://help.figma.com/hc/en-us/articles/32132100833559\" target=\"_blank\" style=\"color: #667eea;\">FigmaMCP Usage Guide (Official)</a>",
    figmamcp_what_note: "※ Figma Desktop app installation required",
    
    figmamcp_how_title: "📋 Usage Flow",
    figmamcp_step1_title: "1. Select in Figma",
    figmamcp_step1_desc: "Select the component or frame you want to review in Figma Desktop app.",
    figmamcp_step2_title: "2. Copy Prompt",
    figmamcp_step2_desc: "Copy the prompt below and paste it into Claude Desktop or Cursor.",
    figmamcp_step3_title: "3. AI Auto-analyzes",
    figmamcp_step3_desc: "Claude reads component information through FigmaMCP and automatically analyzes it.",
    figmamcp_step4_title: "4. Receive Improvement Suggestions",
    figmamcp_step4_desc: "Get specific improvement suggestions based on naming conventions and best practices.",
    
    figmamcp_prompts_title: "🎯 Prompt Collection",
    
    prompt1_title: "💎 Comprehensive Component Review",
    prompt1_desc: "A comprehensive prompt that thoroughly checks the entire component. Use when first reviewing or checking quality of important components.",
    
    prompt2_title: "🏷️ Naming Convention Check (Quick)",
    prompt2_desc: "Use when you want to quickly check only naming conventions. Useful for efficiently reviewing large numbers of components.",
    
    prompt3_title: "📐 Auto Layout Structure Check",
    prompt3_desc: "Checks Auto Layout settings in detail and evaluates responsiveness and maintainability.",
    
    prompt4_title: "🎨 Variant Structure Check",
    prompt4_desc: "Evaluates the design quality of components with variants.",
    
    prompt5_title: "🔄 FlyonUI Integration Check",
    prompt5_desc: "Checks if FlyonUI components are being used appropriately. Confirms compliance with hybrid strategy.",
    
    copy_button: "📋 Copy",
    
    figmamcp_tips_title: "💡 Tips for Effective Use",
    figmamcp_tip1: "<strong>Regular reviews:</strong> Make it a habit to review immediately after creating new components.",
    figmamcp_tip2: "<strong>Slash commands:</strong> Register in Claude Desktop or Cursor slash commands for even more efficiency.",
    figmamcp_tip3: "<strong>Team sharing:</strong> Share these prompts across the team to unify quality standards.",
    figmamcp_tip4: "<strong>Gradual improvement:</strong> Don't try to fix all issues at once, prioritize and address them.",
    figmamcp_tip5: "<strong>As learning tool:</strong> Read AI feedback to learn best practices.",
    
    figmamcp_troubleshoot_title: "🔧 Troubleshooting",
    figmamcp_q1: "<strong>Q: Claude can't read component information</strong><br>A: Check if FigmaMCP is properly set up and component is selected in Figma Desktop app.",
    figmamcp_q2: "<strong>Q: Review results not shown</strong><br>A: Check if entire prompt is copied and Claude's context window is connected to Figma.",
    figmamcp_q3: "<strong>Q: Suggestions not specific enough</strong><br>A: Try adding instructions like \"show specific examples\" or \"step by step\" to the prompt.",
    
    // Naming section
    naming_title: "🏷️ Naming Conventions: Golden Rules",
    naming_basic_title: "Basic Patterns",
    
    naming_table_element: "Element",
    naming_table_pattern: "Naming Pattern",
    naming_table_example: "Example",
    
    naming_component: "Component",
    naming_component_pattern: "Category/Type/Size/State",
    naming_component_example: "Button/Primary/Large/Default",
    
    naming_variant: "Variant",
    naming_variant_pattern: "Property=Value",
    naming_variant_example: "State=Hover, Size=Medium",
    
    naming_variable: "Variable",
    naming_variable_pattern: "category.type.name",
    naming_variable_example: "color.primary.500",
    
    naming_page: "Page",
    naming_page_pattern: "number_name_state",
    naming_page_example: "01_Dashboard_Final",
    
    naming_flyonui_title: "FlyonUI Naming Examples",
    
    naming_mistakes_title: "⚠️ Common Naming Mistakes",
    naming_mistake1: "❌ <code>btn-primary-lg</code> → Avoid abbreviations",
    naming_mistake2: "❌ <code>Button_Primary_Large</code> → Use slashes, not underscores",
    naming_mistake3: "❌ <code>ボタン/プライマリ/大</code> → Use English consistently",
    naming_mistake4: "❌ <code>Button/blue/big</code> → Name by function, not appearance",
    
    naming_correct_title: "✅ Correct Naming:",
    naming_correct1: "✅ <code>Button/Primary/Large/Default</code>",
    naming_correct2: "✅ <code>Input/Text/Medium/Disabled</code>",
    naming_correct3: "✅ <code>Card/Product/Horizontal/Hover</code>",
    
    // Final section
    final_title: "🎉 Let's Get Started!",
    final_message: "With this guide, you can proceed step by step and you'll be fine.<br>Don't aim for perfection - start building, learn from failures.",
    final_first_step: "First Steps",
    final_step1: "Read FlyonUI documentation for 30 minutes",
    final_step2: "Create 01_DesignSystem - Master file",
    final_step3: "Add FlyonUI library",
    final_step4: "Install 3 recommended plugins",
    final_step5: "Try creating one simple screen",
    final_step6: "Setup FigmaMCP and try AI review",
    final_support: "<strong>We're rooting for you!🚀</strong>",
    
    copy_success: "Prompt copied!",
    copy_error: "Copy failed: "
  },
  
  vi: {
    // Hero section
    hero_title: "🚀 Hướng dẫn thực hành FlyonUI × Figma cho người mới bắt đầu",
    hero_subtitle: "Dành cho những người đột ngột được giao nhiệm vụ thiết kế ứng dụng doanh nghiệp quy mô lớn",
    hero_target: "✨ Người mới Figma × Thư viện UI trả phí × Chiến lược môi trường phát triển thực tế",
    
    // Badges
    badge_flyonui: "FlyonUI",
    badge_hybrid: "Phương pháp Hybrid",
    badge_atomic: "Atomic Design",
    badge_beginner: "Thân thiện người mới",
    badge_ai: "Hỗ trợ AI",
    
    // Navigation
    nav_intro: "Giới thiệu",
    nav_basics: "Nguyên tắc cơ bản",
    nav_hybrid: "Chiến lược Hybrid",
    nav_plugins: "Plugin thiết yếu",
    nav_workflow: "Quy trình thực hành",
    nav_figma_mcp: "Đánh giá AI",
    nav_naming: "Quy tắc đặt tên",
    
    // Introduction section
    intro_title: "📖 Về hướng dẫn này",
    intro_for_who_title: "👋 Hướng dẫn này dành cho bạn nếu:",
    intro_for_who_1: "Bạn mới sử dụng Figma nhưng đột ngột được giao nhiệm vụ thiết kế ứng dụng doanh nghiệp quy mô lớn",
    intro_for_who_2: "Bạn được cung cấp FlyonUI, một thư viện UI trả phí để làm việc",
    intro_for_who_3: "Bạn muốn học các best practices trong thiết kế component",
    intro_for_who_4: "Bạn muốn thiết kế có thể xử lý mở rộng và thay đổi trong tương lai",
    intro_for_who_5: "Bạn muốn hợp tác suôn sẻ với nhóm phát triển",
    
    intro_goal_title: "🎯 Mục tiêu của hướng dẫn",
    intro_goal_1_title: "Trở nên hiệu quả ngay lập tức",
    intro_goal_1_desc: "Chúng tôi cung cấp các quy trình cụ thể và template bạn có thể sử dụng trong thực tế từ ngày mai.",
    intro_goal_2_title: "Thiết kế có khả năng mở rộng",
    intro_goal_2_desc: "Học các phương pháp thiết kế có thể chịu được sự phát triển của dự án.",
    intro_goal_3_title: "Hợp tác nhóm",
    intro_goal_3_desc: "Xây dựng cấu trúc tạo điều kiện hợp tác suôn sẻ với các developer.",
    intro_goal_4_title: "Tự tin hơn",
    intro_goal_4_desc: "Hiểu cả lý thuyết và thực hành về lý do tại sao các phương pháp này hiệu quả.",
    
    // Basics section
    basics_title: "✅ 6 nguyên tắc cơ bản trong thiết kế Component Figma",
    basics_1_title: "1. Quy tắc đặt tên và phân cấp có tổ chức",
    basics_1_desc: "Sử dụng <strong>dấu gạch chéo (/)</strong> để phân tách tên layer và tự động nhóm các component trong bảng Assets.",
    basics_1_note: "Điều này hiển thị các component theo thứ bậc trong bảng Assets.",
    
    basics_2_title: "2. Tận dụng Variants và Properties",
    basics_2_desc: "Hợp nhất các component tương tự thành <strong>variants</strong> và tăng tính linh hoạt với <strong>boolean properties</strong> và <strong>instance swap properties</strong>.",
    basics_2_item_1: "State: Default, Hover, Active",
    basics_2_item_2: "Size: Small, Medium, Large",
    basics_2_item_3: "Icon: Boolean (hiện/ẩn)",
    
    basics_3_title: "3. Áp dụng Auto Layout",
    basics_3_desc: "Đạt được layouts linh hoạt <strong>tự động thích ứng</strong> với thay đổi nội dung.",
    basics_3_item_1: "Cấu hình Padding, Gap và Resizing hợp lý",
    basics_3_item_2: "Sử dụng Min/Max Width cho thiết kế responsive",
    
    basics_4_title: "4. Phương pháp Atomic Design",
    basics_4_desc: "Xây dựng các component từng bước từ đơn vị nhỏ nhất (Atoms).",
    basics_4_note: "Atoms → Molecules → Organisms → Templates → Pages",
    
    basics_5_title: "5. SSOT (Single Source of Truth)",
    basics_5_desc: "Định nghĩa styles thành <strong>local styles</strong> (Color Styles, Text Styles) để duy trì tính nhất quán.",
    basics_5_note: "Cũng sử dụng variables để hỗ trợ chuyển đổi theme.",
    
    basics_6_title: "6. Sử dụng Team Libraries",
    basics_6_desc: "<strong>Chia sẻ components</strong> trong toàn nhóm để cải thiện hiệu quả công việc và tính nhất quán.",
    basics_6_note: "Publish để có thể tham chiếu từ các file khác.",
    
    // Hybrid strategy section
    hybrid_title: "🔄 Chiến lược Hybrid FlyonUI (Rất quan trọng!)",
    hybrid_misconception_title: "🤔 Những quan niệm sai lầm phổ biến của người mới",
    hybrid_misconception_wrong: "❌ Quan niệm sai:",
    hybrid_misconception_1: "\"Chỉ cần dùng component FlyonUI như hiện tại là xong\"",
    hybrid_misconception_2: "\"Copy và detach để tùy chỉnh tự do\"",
    hybrid_misconception_3: "\"Bắt đầu với tất cả từ FlyonUI rồi xử lý sau\"",
    hybrid_misconception_warning: "⚠️ Những điều này sẽ gây ra vấn đề lớn sau này!",
    
    hybrid_solution_title: "✨ Giải pháp: Chiến lược Hybrid",
    hybrid_strategy_core_title: "🎯 Chiến lược cốt lõi",
    hybrid_strategy_core_desc: "Duy trì sự đồng bộ với nền tảng code của FlyonUI trong khi cân bằng giữa quản lý dễ dàng và tính linh hoạt tùy chỉnh",
    
    hybrid_2files_title: "📦 Cấu trúc hai file",
    hybrid_file1_name: "01_DesignSystem - Master",
    hybrid_file1_desc: "<span class=\"highlight-text\">Hợp nhất</span> các phụ thuộc thư viện FlyonUI ở đây. Không detach các instance FlyonUI, <strong>bọc (componentize)</strong> chúng để tạo thư viện component riêng.",
    hybrid_file2_name: "02_ProductUI",
    hybrid_file2_desc: "Thiết kế màn hình thực tế ở đây. Chỉ tham chiếu <span class=\"highlight-text\">file 01_DesignSystem của riêng bạn</span>. Điều này ngăn truy cập trực tiếp vào thư viện FlyonUI và đơn giản hóa các phụ thuộc.",
    
    hybrid_comparison_title: "📊 So sánh: Ba phương pháp",
    hybrid_table_approach: "Phương pháp",
    hybrid_table_pros: "Ưu điểm",
    hybrid_table_cons: "Nhược điểm",
    hybrid_table_rating: "Đánh giá",
    
    hybrid_approach1_name: "❌ Sử dụng trực tiếp",
    hybrid_approach1_sub: "Dùng FlyonUI trực tiếp trong ProductUI",
    hybrid_approach1_pros: "• Dễ nhất<br>• Khởi động nhanh",
    hybrid_approach1_cons: "• Khó tùy chỉnh<br>• Phụ thuộc phức tạp<br>• Quản lý dễ thất bại",
    
    hybrid_approach2_name: "❌ Copy hoàn toàn",
    hybrid_approach2_sub: "Copy & detach FlyonUI",
    hybrid_approach2_pros: "• Tự do hoàn toàn<br>• Tùy chỉnh không giới hạn",
    hybrid_approach2_cons: "• Không cập nhật<br>• Mất lợi ích tích hợp code<br>• Mất parameters",
    
    hybrid_approach3_name: "✅ Hybrid",
    hybrid_approach3_sub: "Xây dựng từng bước với chiến lược wrap",
    hybrid_approach3_pros: "• Tùy chỉnh linh hoạt<br>• Tương thích cập nhật<br>• Phụ thuộc rõ ràng<br>• Di chuyển dần dần<br>• Duy trì tích hợp code",
    hybrid_approach3_cons: "• Cần thiết lập ban đầu<br>• Cần hiểu khái niệm",
    
    hybrid_implementation_title: "🔧 Các bước triển khai chiến lược Hybrid",
    hybrid_step1_title: "Thiết lập ban đầu",
    hybrid_step1_1: "Tạo file 01_DesignSystem - Master",
    hybrid_step1_2: "Kích hoạt thư viện FlyonUI",
    hybrid_step1_3: "Định nghĩa styles cơ bản (màu sắc, typography)",
    
    hybrid_step2_title: "Bắt đầu làm việc trong ProductUI",
    hybrid_step2_1: "Tạo file 02_ProductUI",
    hybrid_step2_2: "Đầu tiên, kích hoạt thư viện FlyonUI",
    hybrid_step2_3: "Bắt đầu thiết kế màn hình sử dụng trực tiếp instances FlyonUI",
    
    hybrid_step3_title: "Khi cần tùy chỉnh",
    hybrid_step3_1: "Wrap component mục tiêu trong 01_DesignSystem",
    hybrid_step3_2: "Đặt instance FlyonUI",
    hybrid_step3_3: "Componentize nó (đừng detach!)",
    hybrid_step3_4: "Thêm variant properties nếu cần",
    
    hybrid_step4_title: "Thay thế trong ProductUI",
    hybrid_step4_1: "Kích hoạt thư viện của bạn trong 02_ProductUI",
    hybrid_step4_2: "Thay thế instances FlyonUI bằng components của bạn",
    hybrid_step4_3: "Di chuyển từng bước",
    
    hybrid_step5_title: "Giai đoạn cuối",
    hybrid_step5_1: "Vô hiệu hóa thư viện FlyonUI trong 02_ProductUI",
    hybrid_step5_2: "Chỉ tham chiếu thư viện của bạn",
    hybrid_step5_3: "Hoàn thành phụ thuộc sạch sẽ!",
    
    hybrid_key_points_title: "💡 Điểm chính",
    hybrid_key_point1: "<strong>Wrap từng bước:</strong> Không cần wrap tất cả components từ đầu. Xử lý khi cần tùy chỉnh.",
    hybrid_key_point2: "<strong>Không detach:</strong> Ngay cả khi cần tùy chỉnh, thêm dưới dạng variant properties thay vì detach.",
    hybrid_key_point3: "<strong>Duy trì nhất quán:</strong> Quản lý tập trung cả phiên bản mặc định và tùy chỉnh trong 01_DesignSystem.",
    hybrid_key_point4: "<strong>Tương thích cập nhật:</strong> Cập nhật FlyonUI được phản ánh tự động.",
    
    // Plugins section
    plugins_title: "🔌 Plugin thiết yếu tăng hiệu quả 10 lần",
    
    plugin1_name: "🏷️ Rename It",
    plugin1_use: "<strong>Mục đích:</strong> Đổi tên hàng loạt nhiều layers và components",
    plugin1_when: "<strong>Dùng khi:</strong> Thống nhất quy tắc đặt tên. Tổ chức số lượng lớn components.",
    plugin1_rating: "⭐ Thiết yếu cho người mới: ★★★★★",
    
    plugin2_name: "🎨 Auto Variant Creator",
    plugin2_use: "<strong>Mục đích:</strong> Tự động tạo variants",
    plugin2_when: "<strong>Dùng khi:</strong> Nhanh chóng tạo các trạng thái khác nhau của cùng một component.",
    plugin2_rating: "⭐ Thiết yếu cho người mới: ★★★★☆",
    
    plugin3_name: "🎯 Iconify",
    plugin3_use: "<strong>Mục đích:</strong> Truy cập hơn 100,000 icons",
    plugin3_when: "<strong>Dùng khi:</strong> Chèn bất kỳ icon nào như Material Icons, Font Awesome, Heroicons ở định dạng SVG.",
    plugin3_rating: "⭐ Thiết yếu cho người mới: ★★★★★",
    
    plugin4_name: "🧹 Clean Document",
    plugin4_use: "<strong>Mục đích:</strong> Xóa tài nguyên không cần thiết",
    plugin4_when: "<strong>Dùng khi:</strong> Kích thước file tăng. Tổ chức components và styles không dùng.",
    plugin4_rating: "⭐ Thiết yếu cho người mới: ★★★☆☆",
    
    plugin5_name: "📊 Table Creator",
    plugin5_use: "<strong>Mục đích:</strong> Dễ dàng tạo dữ liệu dạng bảng",
    plugin5_when: "<strong>Dùng khi:</strong> Tạo hiệu quả data tables phổ biến trong ứng dụng doanh nghiệp. Import CSV được.",
    plugin5_rating: "⭐ Thiết yếu cho người mới: ★★★★☆",
    
    plugin6_name: "🔍 Component Inspector",
    plugin6_use: "<strong>Mục đích:</strong> Phát hiện components không dùng",
    plugin6_when: "<strong>Dùng khi:</strong> Kiểm tra design system. Xác định components không cần thiết.",
    plugin6_rating: "⭐ Thiết yếu cho người mới: ★★★☆☆",
    
    // Workflow section
    workflow_title: "📋 Quy trình thực hành: Tuần đầu tiên",
    
    workflow_day12_title: "Ngày 1-2: Thiết lập và hiểu FlyonUI",
    workflow_day12_1: "Đọc tài liệu FlyonUI (https://flyonui.com/docs/)",
    workflow_day12_2: "Tạo file 01_DesignSystem - Master",
    workflow_day12_3: "Thêm thư viện FlyonUI",
    workflow_day12_4: "Cài đặt plugins được đề xuất",
    workflow_day12_5: "Thử tất cả components FlyonUI",
    
    workflow_day34_title: "Ngày 3-4: Định nghĩa Styles cơ bản",
    workflow_day34_1: "Định nghĩa Color Styles trong 01_DesignSystem",
    workflow_day34_2: "Định nghĩa Text Styles (headings, body, captions, v.v.)",
    workflow_day34_3: "Sử dụng Variables cho chuyển đổi theme (Light/Dark)",
    workflow_day34_4: "Định nghĩa biến Spacing, Radius, Shadow",
    
    workflow_day5_title: "Ngày 5: Bắt đầu triển khai ProductUI",
    workflow_day5_1: "Tạo file 02_ProductUI",
    workflow_day5_2: "Kích hoạt thư viện FlyonUI",
    workflow_day5_3: "Tạo màn hình đầu tiên với components FlyonUI",
    workflow_day5_4: "Đừng hướng đến hoàn hảo, chỉ cần bắt đầu xây dựng",
    
    workflow_day67_title: "Ngày 6-7: Tùy chỉnh và Wrap",
    workflow_day67_1: "Liệt kê components cần tùy chỉnh",
    workflow_day67_2: "Wrap từng cái trong 01_DesignSystem",
    workflow_day67_3: "Thêm variant properties",
    workflow_day67_4: "Thay thế trong 02_ProductUI",
    workflow_day67_5: "Thống nhất quy tắc đặt tên (dùng plugin Rename It)",
    
    workflow_goals_title: "💡 Mục tiêu tuần đầu tiên",
    workflow_goal1: "✅ Hiểu cấu trúc hai file",
    workflow_goal2: "✅ Tạo một màn hình sử dụng components FlyonUI",
    workflow_goal3: "✅ Thành công wrap ít nhất một component",
    workflow_goal4: "✅ Quy tắc đặt tên thống nhất",
    workflow_goal5: "✅ Chia sẻ với thành viên nhóm",
    
    // Figma MCP section
    figmamcp_title: "🤖 Tận dụng đánh giá AI với FigmaMCP",
    
    figmamcp_what_title: "🔌 FigmaMCP là gì?",
    figmamcp_what_desc: "FigmaMCP là công cụ tích hợp với ứng dụng Figma Desktop, cho phép AI (Claude) đọc trực tiếp thông tin về các component được chọn. Điều này cho phép kiểm tra tự động quy tắc đặt tên và cấu trúc component.",
    figmamcp_what_setup: "<strong>Hướng dẫn thiết lập:</strong> <a href=\"https://help.figma.com/hc/en-us/articles/32132100833559\" target=\"_blank\" style=\"color: #667eea;\">Hướng dẫn sử dụng FigmaMCP (Chính thức)</a>",
    figmamcp_what_note: "※ Cần cài đặt ứng dụng Figma Desktop",
    
    figmamcp_how_title: "📋 Quy trình sử dụng",
    figmamcp_step1_title: "1. Chọn trong Figma",
    figmamcp_step1_desc: "Chọn component hoặc frame bạn muốn đánh giá trong ứng dụng Figma Desktop.",
    figmamcp_step2_title: "2. Copy Prompt",
    figmamcp_step2_desc: "Copy prompt bên dưới và paste vào Claude Desktop hoặc Cursor.",
    figmamcp_step3_title: "3. AI tự động phân tích",
    figmamcp_step3_desc: "Claude đọc thông tin component qua FigmaMCP và tự động phân tích.",
    figmamcp_step4_title: "4. Nhận đề xuất cải thiện",
    figmamcp_step4_desc: "Nhận đề xuất cải thiện cụ thể dựa trên quy tắc đặt tên và best practices.",
    
    figmamcp_prompts_title: "🎯 Bộ sưu tập Prompt",
    
    prompt1_title: "💎 Đánh giá Component toàn diện",
    prompt1_desc: "Prompt toàn diện kiểm tra kỹ toàn bộ component. Sử dụng khi đánh giá lần đầu hoặc kiểm tra chất lượng component quan trọng.",
    
    prompt2_title: "🏷️ Kiểm tra quy tắc đặt tên (Nhanh)",
    prompt2_desc: "Sử dụng khi bạn muốn kiểm tra nhanh chỉ quy tắc đặt tên. Hữu ích để đánh giá hiệu quả số lượng lớn components.",
    
    prompt3_title: "📐 Kiểm tra cấu trúc Auto Layout",
    prompt3_desc: "Kiểm tra chi tiết cài đặt Auto Layout và đánh giá tính responsive và khả năng bảo trì.",
    
    prompt4_title: "🎨 Kiểm tra cấu trúc Variant",
    prompt4_desc: "Đánh giá chất lượng thiết kế của các components có variants.",
    
    prompt5_title: "🔄 Kiểm tra tích hợp FlyonUI",
    prompt5_desc: "Kiểm tra xem components FlyonUI có được sử dụng phù hợp không. Xác nhận tuân thủ chiến lược hybrid.",
    
    copy_button: "📋 Copy",
    
    figmamcp_tips_title: "💡 Mẹo sử dụng hiệu quả",
    figmamcp_tip1: "<strong>Đánh giá định kỳ:</strong> Hãy tạo thói quen đánh giá ngay sau khi tạo components mới.",
    figmamcp_tip2: "<strong>Slash commands:</strong> Đăng ký trong Claude Desktop hoặc Cursor slash commands để hiệu quả hơn.",
    figmamcp_tip3: "<strong>Chia sẻ nhóm:</strong> Chia sẻ các prompts này trong toàn nhóm để thống nhất tiêu chuẩn chất lượng.",
    figmamcp_tip4: "<strong>Cải thiện từng bước:</strong> Đừng cố sửa tất cả vấn đề cùng lúc, ưu tiên và xử lý chúng.",
    figmamcp_tip5: "<strong>Công cụ học tập:</strong> Đọc phản hồi AI để học best practices.",
    
    figmamcp_troubleshoot_title: "🔧 Khắc phục sự cố",
    figmamcp_q1: "<strong>H: Claude không thể đọc thông tin component</strong><br>Đ: Kiểm tra xem FigmaMCP đã được thiết lập đúng và component đã được chọn trong ứng dụng Figma Desktop.",
    figmamcp_q2: "<strong>H: Kết quả đánh giá không hiển thị</strong><br>Đ: Kiểm tra xem toàn bộ prompt đã được copy và cửa sổ context của Claude đã kết nối với Figma.",
    figmamcp_q3: "<strong>H: Đề xuất không đủ cụ thể</strong><br>Đ: Thử thêm hướng dẫn như \"hiển thị ví dụ cụ thể\" hoặc \"từng bước\" vào prompt.",
    
    // Naming section
    naming_title: "🏷️ Quy tắc đặt tên: Nguyên tắc vàng",
    naming_basic_title: "Mẫu cơ bản",
    
    naming_table_element: "Phần tử",
    naming_table_pattern: "Mẫu đặt tên",
    naming_table_example: "Ví dụ",
    
    naming_component: "Component",
    naming_component_pattern: "Category/Type/Size/State",
    naming_component_example: "Button/Primary/Large/Default",
    
    naming_variant: "Variant",
    naming_variant_pattern: "Property=Value",
    naming_variant_example: "State=Hover, Size=Medium",
    
    naming_variable: "Variable",
    naming_variable_pattern: "category.type.name",
    naming_variable_example: "color.primary.500",
    
    naming_page: "Page",
    naming_page_pattern: "number_name_state",
    naming_page_example: "01_Dashboard_Final",
    
    naming_flyonui_title: "Ví dụ đặt tên FlyonUI",
    
    naming_mistakes_title: "⚠️ Lỗi đặt tên phổ biến",
    naming_mistake1: "❌ <code>btn-primary-lg</code> → Tránh viết tắt",
    naming_mistake2: "❌ <code>Button_Primary_Large</code> → Dùng gạch chéo, không dùng gạch dưới",
    naming_mistake3: "❌ <code>ボタン/プライマリ/大</code> → Dùng tiếng Anh nhất quán",
    naming_mistake4: "❌ <code>Button/blue/big</code> → Đặt tên theo chức năng, không theo hình thức",
    
    naming_correct_title: "✅ Đặt tên đúng:",
    naming_correct1: "✅ <code>Button/Primary/Large/Default</code>",
    naming_correct2: "✅ <code>Input/Text/Medium/Disabled</code>",
    naming_correct3: "✅ <code>Card/Product/Horizontal/Hover</code>",
    
    // Final section
    final_title: "🎉 Hãy bắt đầu!",
    final_message: "Với hướng dẫn này, bạn có thể tiến hành từng bước và sẽ ổn thôi.<br>Đừng hướng đến hoàn hảo - hãy bắt đầu xây dựng, học từ thất bại.",
    final_first_step: "Bước đầu tiên",
    final_step1: "Đọc tài liệu FlyonUI trong 30 phút",
    final_step2: "Tạo file 01_DesignSystem - Master",
    final_step3: "Thêm thư viện FlyonUI",
    final_step4: "Cài đặt 3 plugins được đề xuất",
    final_step5: "Thử tạo một màn hình đơn giản",
    final_step6: "Thiết lập FigmaMCP và thử đánh giá AI",
    final_support: "<strong>Chúng tôi ủng hộ bạn!🚀</strong>",
    
    copy_success: "Đã copy prompt!",
    copy_error: "Copy thất bại: "
  }
};
