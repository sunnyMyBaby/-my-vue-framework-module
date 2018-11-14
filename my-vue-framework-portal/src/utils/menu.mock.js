export default [
  {
		"clientAppId": "insight-web",
		"parentId": "8",
		"childPermissions": [
			{
				"clientAppId": "insight-web",
				"parentId": "9",
				"childPermissions": [],
				"resourceType": "MODULE",
				"alias": "alarmRealtime",
				"enabled": false,
				"url": "/alarm/alarmRealtime",
				"level": null,
				"order": 101,
				"name": "实时报警",
				"permissions": [],
				"id": "10",
				"permission": "c"
			}, 
			{
				"clientAppId": "insight-web",
				"parentId": "9",
				"childPermissions": [],
				"resourceType": "MODULE",
				"alias": "alarmHistory",
				"enabled": false,
				"url": "/alarm/alarmHistory",
				"level": null,
				"order": 102,
				"name": "历史报警",
				"permissions": [{
					"clientAppId": "insight-web",
					"parentId": "11",
					"childPermissions": [],
					"resourceType": "BUTTON",
					"alias": "export",
					"enabled": false,
					"url": null,
					"level": null,
					"order": null,
					"name": "导出",
					"permissions": [],
					"id": "48",
					"permission": "export"
				}],
				"id": "11",
				"permission": "c"
			}, 
			{
				"clientAppId": "insight-web",
				"parentId": "9",
				"childPermissions": [],
				"resourceType": "MODULE",
				"alias": "surveillanceTask",
				"enabled": false,
				"url": "/alarm/surveillanceTask",
				"level": null,
				"order": 103,
				"name": "布控任务",
				"permissions": [{
					"clientAppId": "insight-web",
					"parentId": "12",
					"childPermissions": [],
					"resourceType": "BUTTON",
					"alias": "create",
					"enabled": false,
					"url": null,
					"level": null,
					"order": null,
					"name": "新建布控任务",
					"permissions": [],
					"id": "49",
					"permission": "create"
				}],
				"id": "12",
				"permission": "c"
			}
		],
		"resourceType": "CATEGORY",
		"alias": "alarm",
		"enabled": false,
		"url": "/alarm",
		"level": 1,
		"order": 100,
		"name": "报警",
		"permissions": [],
		"id": "9",
		"permission": "create"
  },
	{
		"clientAppId": "insight-web",
		"parentId": "8",
		"childPermissions": [{
			"clientAppId": "insight-web",
			"parentId": "14",
			"childPermissions": [],
			"resourceType": "MODULE",
			"alias": "captureSearch",
			"enabled": false,
			"url": "/search/captureSearch",
			"level": null,
			"order": 301,
			"name": "抓拍检索",
			"permissions": [{
				"clientAppId": "insight-web",
				"parentId": "15",
				"childPermissions": [],
				"resourceType": "BUTTON",
				"alias": "export",
				"enabled": false,
				"url": null,
				"level": null,
				"order": null,
				"name": "导出",
				"permissions": [],
				"id": "50",
				"permission": "export"
			}],
			"id": "15",
			"permission": "c"
		}, {
			"clientAppId": "insight-web",
			"parentId": "14",
			"childPermissions": [],
			"resourceType": "MODULE",
			"alias": "faceSearch",
			"enabled": false,
			"url": "/search/faceSearch",
			"level": null,
			"order": 302,
			"name": "人像检索",
			"permissions": [{
				"clientAppId": "insight-web",
				"parentId": "16",
				"childPermissions": [],
				"resourceType": "BUTTON",
				"alias": "export",
				"enabled": false,
				"url": null,
				"level": null,
				"order": null,
				"name": "导出",
				"permissions": [],
				"id": "51",
				"permission": "export"
			}],
			"id": "16",
			"permission": "c"
		},{
			"clientAppId": "insight-web",
			"parentId": "14",
			"childPermissions": [],
			"resourceType": "MODULE",
			"alias": "searchLog",
			"enabled": false,
			"url": "/search/searchLog",
			"level": null,
			"order": 304,
			"name": "检索日志",
			"permissions": [],
			"id": "18",
			"permission": "c"
		}],
		"resourceType": "CATEGORY",
		"alias": "search",
		"enabled": false,
		"url": "/search",
		"level": 1,
		"order": 300,
		"name": "检索",
		"permissions": [],
		"id": "14",
		"permission": "c"
	}, 
]