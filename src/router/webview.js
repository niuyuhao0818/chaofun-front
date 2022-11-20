let routes = [];
routes = [
  {
    path: '/webview/contact',
    component: () => import('@/views/chaofun-webview/contact'),
    name: 'contact',
    meta: { title: '联系我们&意见反馈'},
    hidden: true
  },
  {
    path: '/webview/cancelAccount',
    component: () => import('@/views/chaofun-webview/cancelAccount'),
    name: 'contact',
    meta: { title: '注销账号'},
    hidden: true
  },
  {
    path: '/webview/buttonGame',
    component: () => import('@/views/chaofun-webview/buttonGame'),
    name: 'buttonGame',
    meta: { title: 'buttonGame'},
    hidden: true
  },
  {
    path: '/webview/forum/seting',
    component: () => import('@/views/chaofun-webview/forum/setting'),
    name: 'forumseting',
    meta: { title: 'forumseting'},
    hidden: true
  },
  {
    path: '/webview/forum/mod_manager',
    component: () => import('@/views/chaofun-webview/forum/ModManager'),
    name: 'mod_manager',
    meta: { title: '版主管理'},
    hidden: true
  },
  {
    path: '/webview/forum/ban_manager',
    component: () => import('@/views/chaofun-webview/forum/BanManager'),
    name: 'ban_manager',
    meta: { title: '用户封禁'},
    hidden: true
  },
  {
    path: '/webview/forum/sensitive_word_manager',
    component: () => import('@/views/chaofun-webview/forum/SensitiveWord'),
    name: 'sensitive_word_manager',
    meta: { title: '敏感词管理'},
    hidden: true
  },
  {
    path: '/webview/forum/table_manager',
    component: () => import('@/views/chaofun-webview/forum/TableManager'),
    name: 'TableManager',
    meta: { title: '表格管理'},
    hidden: true
  },
  {
    path: '/webview/forum/analytics',
    component: () => import('@/views/chaofun-webview/forum/analytics'),
    name: 'forumanalytics',
    meta: { title: 'forumanalytics'},
    hidden: true
  },
  {
    path: '/webview/forum/log',
    component: () => import('@/views/chaofun-webview/forum/ForumLog'),
    name: 'ForumLog',
    meta: { title: '版块日志'},
    hidden: true
  },
  {
    path: '/webview/forum/tag',
    component: () => import('@/views/chaofun-webview/forum/tag'),
    name: 'forumtag',
    meta: { title: 'forumtag'},
    hidden: true
  },
  {
    path: '/webview/forum/user_tag',
    component: () => import('@/views/chaofun-webview/forum/userTag'),
    name: 'forumUsertag',
    meta: { title: 'forumUsertag'},
    hidden: true
  },
  {
    path: '/webview/forum/auto_replay',
    component: () => import('@/views/chaofun-webview/forum/AutoReply'),
    name: 'auto_replay',
    meta: { title: '自动回复设置'},
    hidden: true
  },
  {
    path: '/webview/forum/badge',
    component: () => import('@/views/chaofun-webview/forum/BadgeManager'),
    name: 'badge',
    meta: { title: '徽章管理'},
    hidden: true
  },
  {
    path: '/webview/forum/rule',
    component: () => import('@/views/chaofun-webview/forum/rule'),
    name: 'forumRule',
    meta: { title: '版块规范设置'},
    hidden: true
  },
  {
    path: '/webview/forum/show_rule',
    component: () => import('@/views/chaofun-webview/forum/showRule'),
    name: 'forumRule',
    meta: { title: '版块规范设置'},
    hidden: true
  },
  {
    path: '/webview/thx',
    component: () => import('@/views/chaofun-webview/thx/thx'),
    name: 'forumthx',
    meta: { title: 'forumthx'},
    hidden: true
  },
  {
    path: '/webview/forum/notify',
    component: () => import('@/views/chaofun-webview/forum/notify'),
    name: 'forumnotify',
    meta: { title: 'forumnotify'},
    hidden: true
  },
  {
    path: '/webview/activity/index',
    component: () => import('@/views/chaofun-webview/activity/index'),
    name: 'activityindex',
    meta: { title: 'activityindex'},
    hidden: true
  },
  {
    path: '/webview/prediction/rank',
    component: () => import('@/views/chaofun-webview/prediction/rank'),
    name: 'prediction_rank',
    meta: { title: '竞猜活动'},
    hidden: true
  },
  {
    path: '/webview/badge',
    component: () => import('@/views/chaofun-webview/badge/badgeDetail'),
    name: 'badge',
    meta: { title: '徽章介绍'},
    hidden: true
  },
  {
    path: '/webview/badge/setting',
    component: () => import('@/views/chaofun-webview/badge/BadgeSetting'),
    name: 'badge_setting',
    meta: { title: '徽章显示设置'},
    hidden: true
  },
  {
    path: '/webview/fbi',
    component: () => import('@/views/chaofun-webview/fbi/fbi'),
    name: 'fbi',
    meta: { title: 'Fbi'},
    hidden: true
  },
  {
    path: '/webview/report',
    component: () => import('@/views/chaofun-webview/report/report'),
    name: 'report',
    meta: { title: '举报处理'},
    hidden: true
  },
  {
    path: '/webview/donate',
    component: () => import('@/views/chaofun-webview/donate/donate'),
    name: 'donate',
    meta: { title: '众筹'},
    hidden: true
  },
  {
    path: '/webview/fbi/order',
    component: () => import('@/views/chaofun-webview/fbi/order'),
    name: 'order',
    meta: { title: '下单'},
    hidden: true
  },
  {
    path: '/webview/fbi/history',
    component: () => import('@/views/chaofun-webview/fbi/FBiHistory'),
    name: 'fbi',
    meta: { title: 'Fbi'},
    hidden: true
  },

  {
    path: '/webview/fbi/redPacket',
    component: () => import('@/views/chaofun-webview/fbi/RedPacket'),
    name: 'FBi 红包',
    meta: { title: 'FBi 红包'},
    hidden: true
  },

  {
    path: '/webview/fbi/redPackt',
    component: () => import('@/views/chaofun-webview/fbi/RedPackt'),
    name: 'FBi 红包',
    meta: { title: 'FBi 红包'},
    hidden: true
  },

  {
    path: '/webview/fbi/redPacket/create',
    component: () => import('@/views/chaofun-webview/fbi/RedPacketCreate'),
    name: 'FBi 红包创建',
    meta: { title: 'FBi 红包创建'},
    hidden: true
  },
  // {
  //   path: '/webview/fbi/redPacket/password',
  //   component: () => import('@/views/chaofun-webview/fbi/RedPacketPassword'),
  //   name: 'FBi 红包',
  //   meta: { title: 'FBi 红包'},
  //   hidden: true
  // },
  {
    path: '/webview/OAuth',
    component: () => import('@/views/chaofun-webview/OAuth'),
    name: 'FBi 红包',
    meta: { title: 'FBi 红包'},
    hidden: true
  },
  {
    path: '/webview/Year2021',
    component: () => import('@/views/chaofun-webview/year2021/year2021'),
    name: 'year2021',
    meta: { title: '我的炒饭2021'},
    hidden: true
  },
  {
    path: '/webview/buttonGame/rank',
    component: () => import('@/views/chaofun-webview/buttonGame/rank'),
    name: 'rank',
    meta: { title: 'rank'},
    hidden: true
  },
  {
    path: '/webview/secret',
    component: () => import('@/views/chaofun-webview/secret/index'),
    name: 'webViewSecret',
    meta: { title: 'secret'},
    hidden: true
  },
  {
    path: '/tuxun/random',
    component: () => import('@/views/tuxun/RandomStreetView'),
    name: '图寻首页',
    meta: { title: '图寻首页'},
    hidden: true
  },
  {
    path: '/tuxun',
    component: () => import('@/views/tuxun/TXNewHome'),
    name: '图寻首页',
    meta: { title: '图寻首页'},
    hidden: true
  },
  {
    path: '/tuxun/streak',
    component: () => import('@/views/tuxun/TXStreak'),
    name: '图寻首页',
    meta: { title: '图寻首页'},
    hidden: true
  },
  {
    path: '/tuxun/guoqing',
    component: () => import('@/views/tuxun/TuxunGuoQing'),
    name: '图寻国庆活动',
    meta: { title: '图寻国庆活动'},
    hidden: true
  },
  {
    path: '/tuxun/streak_game',
    component: () => import('@/views/tuxun/TXInvitor'),
    name: '图寻连胜',
    meta: { title: '图寻连胜'},
    hidden: true
  },
  {
    path: '/tuxun/guoqing_game',
    component: () => import('@/views/tuxun/TXInvitor'),
    name: '图寻国庆活动',
    meta: { title: '图寻国庆活动'},
    hidden: true
  },
  {
    path: '/tuxunNewMap',
    component: () => import('@/views/tuxun/TXNewMap'),
    name: '图寻首页',
    meta: { title: '图寻首页'},
    hidden: true
  },
  {
    path: '/tuxun/main_game',
    component: () => import('@/views/tuxun/TXHome'),
    name: '图寻',
    meta: { title: '图寻'},
    hidden: true
  },
  {
    path: '/tuxun/daily_challenge',
    component: () => import('@/views/tuxun/DailyChallenge'),
    name: '图寻每日挑战',
    meta: { title: '图寻每日挑战'},
    hidden: true
  },
  {
    path: '/tuxun/solo_game',
    component: () => import('@/views/tuxun/TXInvitor'),
    name: '图寻邀请PK',
    meta: { title: '图寻邀请PK'},
    hidden: true
  },
  {
    path: '/tuxun/team_game',
    component: () => import('@/views/tuxun/TXInvitor'),
    name: '图寻邀请PK',
    meta: { title: '图寻邀请PK'},
    hidden: true
  },
  {
    path: '/tuxun/challenge',
    component: () => import('@/views/tuxun/TXInvitor'),
    name: '图寻挑战',
    meta: { title: '图寻挑战'},
    hidden: true
  },
  {
    path: '/tuxun/maps_game',
    component: () => import('@/views/tuxun/TXHome'),
    name: '练习赛',
    meta: { title: '练习赛'},
    hidden: true
  },
  {
    path: '/scratch/home',
    component: () => import('@/views/scratch/HomePage'),
    name: 'scratch',
    meta: { title: 'scratch'},
    hidden: true
  },
  {
    path: '/scratch/tag',
    component: () => import('@/views/scratch/TagPage'),
    name: 'TagPage',
    meta: { title: 'TagPage'},
    hidden: true
  },
  {
    path: '/scratch',
    component: () => import('@/views/scratch/HomePage'),
    name: 'scratch',
    meta: { title: 'scratch'},
    hidden: true
  },
  {
    path: '/scratch/guess',
    component: () => import('@/views/scratch/GamePage'),
    name: 'scratch_game',
    meta: { title: 'scratch_game'},
    hidden: true
  },
  {
    path: '/scratch/create',
    component: () => import('@/views/scratch/Create'),
    name: 'scratch_create',
    meta: { title: 'scratch_create'},
    hidden: true
  },
  {
    path: '/scratch/modify',
    component: () => import('@/views/scratch/Create'),
    name: 'scratch_modify',
    meta: { title: 'scratch_modify'},
    hidden: true
  },
  {
    path: '/tuxun/home',
    component: () => import('@/views/tuxun/TXNewHome'),
    name: 'tuxun',
    meta: { title: 'tuxun'},
    hidden: true
  },
  {
    path: '/live',
    component: () => import('@/views/live/test'),
    name: 'live',
    meta: { title: 'live'},
    hidden: true
  },
  {
    path: '/tuxun/rank',
    component: () => import('@/views/tuxun/rank'),
    name: 'rank',
    meta: { title: 'rank'},
    hidden: true
  },
  {
    path: '/tuxun/maps',
    component: () => import('@/views/tuxun/maps'),
    name: 'maps',
    meta: { title: '图寻练习集'},
    hidden: true
  },
  {
    path: '/tuxun/publicity',
    component: () => import('@/views/tuxun/publicity'),
    name: '外宣',
    meta: { title: '直播/视频/教程'},
    hidden: true
  },
  {
    path: '/tuxun/random',
    component: () => import('@/views/tuxun/RandomStreetView'),
    name: '随机街景',
    meta: { title: '随机街景'},
    hidden: true
  },
  {
    path: '/tuxun/googleTest',
    component: () => import('@/views/tuxun/GoogleTest'),
    name: '',
    meta: { title: ''},
    hidden: true
  },
  {
    path: '/tuxun/user/:id',
    component: () => import('@/views/tuxun/profile'),
    name: 'tuxunProfile',
    meta: { title: '',keepAlive: true,},
    hidden: true
  },
  {
    path: '/tuxunAdmin',
    component: () => import('@/views/tuxun/TXAdmin'),
    name: 'tuxunAdmin',
    meta: { title: 'tuxunAdmin'},
    hidden: true
  },
  {
    path: '/tuxunFilter',
    component: () => import('@/views/tuxun/TuxunFilter'),
    name: 'tuxunFilter',
    meta: { title: 'tuxunFilter'},
    hidden: true
  },
  {
    path: '/webview/forumIntro',
    component: () => import('@/views/activity/help/forumIntro'),
    name: 'webViewForumIntro',
    meta: { title: '版主介绍'},
    hidden: true
  },
  {
    path: '/webview/agreement',
    component: () => import('@/views/chaofun-webview/agreement/agreement'),
    name: 'webViewForumIntro',
    meta: { title: '炒饭隐私政策'},
    hidden: true
  },
  {
    path: '/webview/useragree',
    component: () => import('@/views/chaofun-webview/agreement/useragree'),
    name: 'webViewForumIntro',
    meta: { title: '炒饭用户协议'},
    hidden: true
  },
]

export default  routes;
