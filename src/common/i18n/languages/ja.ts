/**
 * @author: kamatte
 * @homepage: https://kamatte.me
 */

import { LanguageDict } from '@common/types'

const lang: LanguageDict = {
  _app_name: 'SwitchHosts',
  _key: 'ja',
  _name: '日本語',
  about: 'SwitchHosts について',
  acknowledgement: '謝辞',
  advanced: '詳細設定',
  all: 'すべて',
  append: '追記',
  auto_refresh: '自動更新',
  btn_cancel: 'キャンセル',
  btn_ok: 'OK',
  change: '変更',
  check_update: 'アップデートを確認',
  choice_mode: '選択モード',
  choice_mode_default: 'デフォルト',
  choice_mode_desc:
    '最上位階層のhostsにのみ有効で、各フォルダーでは独自に選択モードを設定できます。',
  choice_mode_multiple: '複数',
  choice_mode_single: '単一',
  choices: '選択',
  chosen: '選択済み',
  clear_history: '履歴をクリア',
  click_to_open: 'クリックして開く',
  close: '閉じる',
  colon: ': ',
  commands: 'コマンド',
  commands_help: 'hostsが適用されたとき、以下のシステムコマンドを実行します:',
  commands_title: 'hosts適用後のコマンド',
  comment_current_line: '現在の行をコメントアウト',
  content: '内容',
  copy: 'コピー',
  cut: '切り取り',
  day: '日',
  days: '日',
  delete: '削除',
  download: 'ダウンロード',
  edit: '編集',
  export: 'エクスポート',
  export_done: 'エクスポートが完了しました。',
  fail: '失敗',
  feedback: 'フィードバック',
  file: 'ファイル',
  find: '検索',
  find_all: 'すべて検索',
  find_and_replace: '検索と置換',
  find_history: '検索履歴',
  folder: 'フォルダー',
  folder_import: 'フォルダーをインポート',
  front: '前面',
  general: '一般',
  group: 'グループ',
  help: 'ヘルプ',
  hide: '非表示',
  hide_at_launch: '起動時に非表示',
  hide_dock_icon: 'Dockアイコンを非表示',
  hide_history: '履歴を非表示',
  hide_others: 'その他を非表示にする',
  homepage: 'ホームページ',
  host: 'ホスト',
  hosts_add: 'hostsを追加',
  hosts_delete: 'hostsを削除',
  hosts_delete_confirm: 'このhostsを削除してもよろしいですか？',
  hosts_edit: 'hostsを編集',
  hosts_title: 'hostsタイトル',
  hosts_type: 'hostsタイプ',
  hosts_updated: 'hostsを更新しました。',
  hour: '時間',
  hours: '時間',
  http_api_on: 'HTTP APIを有効化',
  http_api_on_desc:
    '{0}番ポートで実行され、Alfredなどのサードパーティソフトウェアでhostsを切り替えるために使用できます。',
  http_api_only_local: 'HTTP APIを 127.0.0.1 のみでリッスンする',
  ignore_case: '大文字と小文字を区別しない',
  import: 'インポート',
  import_done: 'インポートが完了しました。',
  import_fail: 'インポートに失敗しました！',
  import_from_url: 'URLからインポート',
  is_latest_version_inform: 'ご利用のバージョンは最新です！',
  check_update_failed: 'アップデートの確認に失敗しました！',
  item_found: '{0}件見つかりました。',
  items: '件',
  items_found: '{0}件見つかりました。',
  language: '言語',
  last_refresh: '最終更新: ',
  latest_version_desc: '最新バージョン: {0}',
  line: '行',
  lines: '行',
  loading: '読み込み中...',
  local: 'ローカル',
  match: '一致',
  migrate_confirm:
    'SwitchHosts v4.0は新しいデータ保存形式を使用します。古いデータを新しい形式に移行しますか？',
  migrate_data: 'データ移行',
  minimize: '最小化',
  minute: '分',
  minutes: '分',
  move_items_to_trashcan: '{0}件をごみ箱に入れる',
  move_to_trashcan: 'ゴミ箱に入れる',
  multi_chose_folder_switch_all: 'フォルダーの切り替えで配下のアイテムを一括操作',
  need_to_relaunch: '再起動が必要です',
  need_to_relaunch_after_setting_changed:
    '変更された設定はアプリケーションの再起動後に有効になります。',
  never: 'なし',
  new: '新規',
  new_version_found: '新しいバージョンが見つかりました',
  next: '次へ',
  no_access_to_hosts: 'hostsファイルの書き込み権限がありません。',
  no_record: 'なし',
  overwrite: '上書き',
  password: 'パスワード',
  paste: '貼り付け',
  port: 'ポート',
  preferences: '設定',
  previous: '前へ',
  protocol: 'プロトコル',
  proxy: 'プロキシ',
  quit: '終了',
  read_only: '読み取り専用',
  redo: 'やり直し',
  refresh: '更新',
  regexp: '正規表現',
  reload: '再読み込み',
  remote: 'リモート',
  remove_duplicate_records: '重複レコードを削除',
  remove_duplicate_records_desc:
    '1つのドメインに複数のIPアドレスを指定している場合、先頭のIPアドレスのみが有効になり、以降のIPアドレスはコメントに変換されます。',
  replace: '置換',
  replace_all: 'すべて置換',
  replace_history: '置換履歴',
  reset: 'リセット',
  reset_data_dir_confirm: 'データフォルダーの場所をデフォルト ({0}) に戻してもよろしいですか？',
  reset_zoom: 'ズームをリセット',
  search: '検索',
  select_all: 'すべて選択',
  selected: '選択済み',
  show_dock_icon: 'Dockアイコンを表示',
  show_history: '履歴を表示',
  show_main_window: 'メインウィンドウを表示',
  show_title_on_tray: 'トレイにタイトルを表示',
  source_code: 'ソースコード',
  success: '成功',
  sudo_prompt_title: '管理者パスワードを入力してください',
  system_hosts: 'システムhosts',
  system_hosts_history: 'システムhostsのバージョン履歴',
  system_hosts_history_delete_confirm: 'この履歴を削除してもよろしいですか？',
  system_hosts_history_help: '履歴件数がこれを超えると、最も古い履歴が削除されます。',
  system_hosts_history_limit: '履歴の最大件数: ',
  test: 'テスト',
  theme: 'テーマ',
  theme_dark: 'ダーク',
  theme_light: 'ライト',
  title: 'タイトル',
  to_show_source: 'ダブルクリックでソースコードを表示する。',
  toggle_developer_tools: '開発者ツールの表示/非表示',
  toggle_dock_icon: 'Dockアイコンの表示/非表示',
  toggle_full_screen: 'フルスクリーン',
  trashcan: 'ゴミ箱',
  trashcan_clear: 'ゴミ箱を空にする',
  trashcan_clear_confirm: 'ゴミ箱を空にしてもよろしいですか？',
  trashcan_delete_confirm: 'この項目を完全に削除しますか？',
  trashcan_restore: '戻す',
  tray_mini_window: 'タスクバーアイコンショートカット',
  undo: '元に戻す',
  unhide: 'すべて表示',
  untitled: '無題',
  url_placeholder: 'http:// または https:// または file://',
  usage_data_agree: 'はい、匿名の利用データを送信します。',
  usage_data_help: '匿名の利用データを定期的に送信し、SwitchHostsの改善にご協力いただけませんか？',
  usage_data_title: 'SwitchHostsの改善に協力する',
  use_proxy: 'プロキシを使用',
  use_system_window_frame:
    'システムのウィンドウフレームを使用。アプリケーションの再起動が必要です。',
  view: '表示',
  where_is_my_data: 'データはどこに保存されますか？',
  where_is_my_hosts: 'hostsファイルはどこにありますか？',
  window: 'ウィンドウ',
  write_mode: '書き込みモード',
  write_mode_append_help: '新しいレコードをシステムhostsの末尾に追記します。',
  write_mode_overwrite_help: '新しいレコードでシステムhostsを上書きします。',
  write_mode_set: '書き込みモードを設定',
  your_data_is: 'あなたのデータファイルはこちらに保存されています:',
  your_hosts_file_is: 'あなたのhostsファイルはこちらにあります:',
  zoom: 'ズーム',
  zoom_in: '拡大',
  zoom_out: '縮小',
}

export default lang
