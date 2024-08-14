# 概要
ITセキュリティに関する意識向上を目的としたハンズオン教材である。ユーザーはwww.py内に記述された脆弱性を確認・修正を通じて理解を深めていくことを想定している。

# ディレクトリ構造とファイルの役割
~~
## config/
- `settings.py`: アプリケーションの設定を管理するファイル

## docs/
各章に関するドキュメントファイル。
- `chapter1_chmod.md`: chmodの問題に関する説明と修正手順
- `chapter2_directory_traversal.md`: ディレクトリトラバーサルの説明と修正手順
- `chapter3_cookie_theft.md`: クッキー盗用の説明と修正手順
- `chapter4_XSS.md`: XSSの説明と修正手順

## src/
アプリケーションのメインソースコードを含むディレクトリ。
- `app.py`: アプリケーションのエントリーポイント
- `www.py`: オリジナルの脆弱性を含むWebサーバ
- `www_modified.py`: 脆弱性修正後のWebサーバ

## src/routes/
各章のルートやエンドポイントを定義するディレクトリ。
- `chapter1.py`, `chapter2.py`, `chapter3.py`, `chapter4.py`: 各章のルートを定義

## src/templates/
HTMLテンプレートを含むディレクトリ。
- `index.html`: TOPページのテンプレート
- `chapter1.html`, `chapter2.html`, `chapter3.html`, `chapter4.html`: 各章のテンプレート

## src/static/
CSSやJavaScriptなどの静的ファイルを管理するディレクトリ。
- `css/styles.css`: スタイルシート
- `js/scripts.js`: JavaScriptファイル

## tests/
テストコードを含むディレクトリ。
- `test_chapter1.py`, `test_chapter2.py`, `test_chapter3.py`, `test_chapter4.py`: 各章のテストコード
- `test_www.py`: `www.py` のテストコード

その他のファイル:
- `requirements.txt`: プロジェクトの依存関係を記述
- `README.md`: プロジェクトの説明とガイド
- `setup.py`: パッケージのセットアップ用スクリプト
~~
