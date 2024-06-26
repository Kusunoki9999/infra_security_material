# 概要
ITセキュリティに関する意識向上を目的としたWEBアプリケーション教材です。ユーザーはwww.py内に記述された脆弱性を確認・修正を通じて理解を深めていくことを想定しています。


# 各ディレクトリとファイルの役割
config/
    settings.py: アプリケーションの設定を含むファイル
docs/
    各章に関するドキュメントファイル。具体的な脆弱性の説明や修正手順を記載
src/
　アプリケーションのメインソースコードを含むディレクトリ
    app.py: アプリケーションのエントリーポイントです。
    www.py: オリジナルのWebサーバで脆弱性を含む。
    www_modified.py: 脆弱性修正後のWebサーバ。
src/routes/
　各章のルートやエンドポイントを定義
    chapter1.py, chapter2.py, chapter3.py, chapter4.py: 各章のルートを定義
src/templates/
　HTMLテンプレートを含むディレクトリです。
    index.html: TOPページを定義するテンプレート
    chapter1.html, chapter2.html, chapter3.html, chapter4.html: 各章のテンプレート
src/static/
　CSSやJavaScriptなどの静的ファイルを含むディレクトリ
    css/styles.css: スタイルシート
    js/scripts.js: JavaScriptファイル
tests/
　テストコードを含むディレクトリ、こちらでテストしてからsrcへ
    test_chapter1.py, test_chapter2.py, test_chapter3.py, test_chapter4.py: 各章のテストコード
    test_www.py: www.py のテストコード
その他のファイル
    requirements.txt: プロジェクトの依存関係を記述
    README.md: プロジェクトの説明とガイドを提供するファイル
    setup.py: パッケージのセットアップ用スクリプト