(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-ca08e9b8"], {
    "0f05": function(e, t, i) {
        "use strict";
        i("aecc")
    },
    3914: function(e, t, i) {},
    "58aa": function(e, t, i) {
        "use strict";
        i("8be0")
    },
    "5dbd": function(e, t, i) {
        "use strict";
        i("9893")
    },
    6457: function(e, t, i) {},
    "793d": function(e, t, i) {
        "use strict";
        i("3914")
    },
    "8be0": function(e, t, i) {},
    9893: function(e, t, i) {},
    adf4: function(e, t, i) {
        "use strict";
        i("6457")
    },
    aecc: function(e, t, i) {},
    ed56: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "page-container"
            }, [i("div", {
                staticClass: "page-title"
            }, [e._v(" 发布作品 ")]), i("div", {
                staticClass: "main"
            }, [i("release-content", {
                ref: "textForm"
            }), i("release-preview", {
                ref: "mobile"
            })], 1)])
        }
          , s = []
          , n = (i("b0c0"),
        function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "main-left"
            }, [e._m(0), i("div", {
                staticClass: "title-desc"
            }, [e._v(" 发布后，您的作品将同时展示在电子发烧友网-视频模块和硬声App内哦～ ")]), i("el-form", {
                ref: "form",
                staticClass: "desc-form",
                attrs: {
                    size: "small",
                    model: e.form,
                    "label-width": "100px",
                    "label-position": "top"
                }
            }, [i("el-row", [i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "作品标题：",
                    required: ""
                }
            }, [i("release-textarea", {
                on: {
                    handleSaveTitle: e.handleSaveTitle
                }
            })], 1)], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "作品封面：",
                    required: ""
                }
            }, [i("div", {
                staticClass: "poster"
            }, [i("el-image", {
                staticClass: "img",
                attrs: {
                    src: e.form.pic_url,
                    fit: "contain",
                    "preview-src-list": [e.form.pic_url]
                }
            }), i("div", {
                staticClass: "desc"
            }, [i("div", {
                staticClass: "desc-title"
            }, [e._v("默认封面")]), i("div", {
                staticClass: "desc-content"
            }, [e._v("如不上传封面，则使用视频第一帧作为默认封面")])]), i("el-button", {
                staticClass: "btn-poster",
                attrs: {
                    type: "text"
                },
                on: {
                    click: e.handleChooseFile
                }
            }, [i("i", {
                staticClass: "el-icon-top"
            }), e._v(" 上传 ")]), i("input", {
                ref: "imginput",
                attrs: {
                    type: "file",
                    hidden: "",
                    accept: e.accept
                },
                on: {
                    change: e.handleChange
                }
            })], 1)])], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "位置：",
                    required: ""
                }
            }, [i("el-radio-group", {
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.is_show,
                    callback: function(t) {
                        e.$set(e.form, "is_show", t)
                    },
                    expression: "form.is_show"
                }
            }, [i("el-radio", {
                attrs: {
                    label: 1
                }
            }, [e._v("不显示")]), i("el-radio", {
                attrs: {
                    label: 2
                }
            }, [e._v("显示")])], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == e.form.is_show,
                    expression: "form.is_show==2"
                }],
                staticClass: "location"
            }, [i("i", {
                staticClass: "el-icon-location"
            }), i("span", {
                staticClass: "city"
            }, [e._v(e._s(e.form.province) + "-" + e._s(e.form.city))]), i("el-select", {
                directives: [{
                    name: "el-select-loadmore",
                    rawName: "v-el-select-loadmore",
                    value: e.loadmore,
                    expression: "loadmore"
                }],
                staticClass: "select",
                attrs: {
                    "default-first-option": !0,
                    clearable: "",
                    placeholder: "请选择位置",
                    filterable: "",
                    remote: "",
                    "remote-method": e.searchPlace
                },
                on: {
                    change: e.handleSaveDraft,
                    clear: e.searchPlace
                },
                model: {
                    value: e.form.address,
                    callback: function(t) {
                        e.$set(e.form, "address", t)
                    },
                    expression: "form.address"
                }
            }, e._l(e.placeList, (function(e, t) {
                return i("el-option", {
                    key: t,
                    attrs: {
                        label: e.name,
                        value: e.name
                    }
                })
            }
            )), 1)], 1)], 1)], 1), "45".includes(e.userData.user_type.toString()) ? i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "跳转链接："
                }
            }, [i("div", {
                staticClass: "link"
            }, [i("div", {
                staticClass: "link-name"
            }, [i("span", {}, [e._v("推广名称：")]), i("el-input", {
                attrs: {
                    maxlength: "15",
                    type: "text"
                },
                on: {
                    blur: e.handleSaveDraft
                },
                model: {
                    value: e.form.event_name,
                    callback: function(t) {
                        e.$set(e.form, "event_name", t)
                    },
                    expression: "form.event_name"
                }
            })], 1), i("div", {
                staticClass: "link-url"
            }, [i("span", {}, [e._v("推广链接：")]), i("el-input", {
                attrs: {
                    type: "text"
                },
                on: {
                    blur: e.handleSaveDraft,
                    input: e.handleSpace
                },
                model: {
                    value: e.form.event_url,
                    callback: function(t) {
                        e.$set(e.form, "event_url", t)
                    },
                    expression: "form.event_url"
                }
            })], 1)])])], 1) : e._e(), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("div", {
                staticClass: "title"
            }, [i("div", {
                staticClass: "hr"
            }), i("span", [e._v("作品设置")])])]), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "查看权限：",
                    required: ""
                }
            }, [i("el-radio-group", {
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.release_status,
                    callback: function(t) {
                        e.$set(e.form, "release_status", t)
                    },
                    expression: "form.release_status"
                }
            }, [i("el-radio", {
                attrs: {
                    label: 1
                }
            }, [e._v("公开：所有人可见")]), i("el-radio", {
                attrs: {
                    label: 2
                }
            }, [e._v("私有：仅自己可见")])], 1)], 1)], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "推送时间：",
                    required: ""
                }
            }, [i("el-radio-group", {
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.way,
                    callback: function(t) {
                        e.$set(e.form, "way", t)
                    },
                    expression: "form.way"
                }
            }, [i("el-radio", {
                attrs: {
                    label: 1
                }
            }, [e._v("即时发送")]), i("el-radio", {
                attrs: {
                    label: 2
                }
            }, [e._v("定时发送")])], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == e.form.way,
                    expression: "form.way==2"
                }],
                staticClass: "timer"
            }, [i("span", {
                staticClass: "name"
            }, [e._v("定时发送时间：")]), i("el-date-picker", {
                staticClass: "select",
                attrs: {
                    type: "date",
                    format: "yyyy-MM-dd",
                    "value-format": "yyyy-MM-dd",
                    placeholder: "选择日期",
                    "picker-options": e.pickerOptions
                },
                on: {
                    change: e.haneSendDate
                },
                model: {
                    value: e.sendTime.date,
                    callback: function(t) {
                        e.$set(e.sendTime, "date", t)
                    },
                    expression: "sendTime.date"
                }
            }), i("el-time-picker", {
                staticClass: "select",
                attrs: {
                    "value-format": "HH:mm:ss",
                    "picker-options": e.pickerOptionsTime,
                    placeholder: "选择时间"
                },
                on: {
                    change: e.haneSendTime
                },
                model: {
                    value: e.sendTime.time,
                    callback: function(t) {
                        e.$set(e.sendTime, "time", t)
                    },
                    expression: "sendTime.time"
                }
            })], 1)], 1)], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "合集设置："
                }
            }, [i("el-radio-group", {
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.is_collection,
                    callback: function(t) {
                        e.$set(e.form, "is_collection", t)
                    },
                    expression: "form.is_collection"
                }
            }, [i("el-radio", {
                attrs: {
                    label: 1
                }
            }, [e._v("不设置")]), i("el-radio", {
                attrs: {
                    label: 2
                }
            }, [e._v("设置")])], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == e.form.is_collection,
                    expression: "form.is_collection==2"
                }],
                staticClass: "timer"
            }, [i("el-select", {
                staticClass: "collect",
                attrs: {
                    clearable: "",
                    placeholder: "请选择合集"
                },
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.collection_id,
                    callback: function(t) {
                        e.$set(e.form, "collection_id", t)
                    },
                    expression: "form.collection_id"
                }
            }, e._l(e.collectTypes, (function(e) {
                return i("el-option", {
                    key: e.value,
                    attrs: {
                        label: e.label,
                        value: e.value
                    }
                })
            }
            )), 1)], 1)], 1)], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-form-item", {
                attrs: {
                    label: "原创：",
                    required: ""
                }
            }, [i("div", {
                staticClass: "owner"
            }, [i("img", {
                attrs: {
                    src: "/img/icon_owner.png",
                    alt: ""
                }
            }), i("span", {
                staticClass: "owner-tip"
            }, [e._v(" 硬声支持原创作品，为保护你的知识产权，请慎重选择作品的原创属性，设为原创后，平台审核通过后将为作品添加原创标识 ")]), i("el-switch", {
                staticClass: "owner-switch",
                attrs: {
                    "active-value": 2,
                    "inactive-value": 1
                },
                on: {
                    change: e.handleSaveDraft
                },
                model: {
                    value: e.form.is_original,
                    callback: function(t) {
                        e.$set(e.form, "is_original", t)
                    },
                    expression: "form.is_original"
                }
            })], 1)])], 1)], 1), i("el-col", {
                attrs: {
                    span: 24
                }
            }, [i("el-button", {
                staticClass: "btn-cancel",
                on: {
                    click: e.handleCancel
                }
            }, [e._v("取消")]), i("el-button", {
                staticClass: "btn-save",
                attrs: {
                    type: "primary",
                    loading: e.loading
                },
                on: {
                    click: e.handleRelease
                }
            }, [e._v("发布作品")])], 1)], 1), i("amap-location", {
                on: {
                    getLocation: e.handleLocation
                }
            })], 1)
        }
        )
          , r = [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "title"
            }, [i("div", {
                staticClass: "hr"
            }), i("span", [e._v("作品描述")])])
        }
        ]
          , o = i("5530")
          , l = (i("e9c4"),
        i("d81d"),
        i("ac1f"),
        i("841c"),
        i("99af"),
        i("5319"),
        i("00b4"),
        i("4d63"),
        i("2c3e"),
        i("25f0"),
        i("9911"),
        i("2f62"))
          , c = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                attrs: {
                    id: "container"
                }
            }, [i("div", {
                staticClass: "text-wrap"
            }, [i("div", {
                ref: "showText",
                staticClass: "highlight"
            })]), i("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.form.title,
                    expression: "form.title"
                }],
                ref: "text",
                attrs: {
                    autocomplete: "false",
                    maxlength: "55",
                    placeholder: "编辑一条让人眼前一亮的标题，插入话题会获得更多互动噢~"
                },
                domProps: {
                    value: e.form.title
                },
                on: {
                    input: [function(t) {
                        t.target.composing || e.$set(e.form, "title", t.target.value)
                    }
                    , e.handdleInput],
                    blur: e.handleSaveTitle
                }
            }), e._v(" "), i("div", {
                staticClass: "show-limit"
            }, [e._v(e._s(e.wordCount) + "/55")]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showSugg,
                    expression: "showSugg"
                }, {
                    name: "clickoutside",
                    rawName: "v-clickoutside",
                    value: e.handldeSuggOnBlur,
                    expression: "handldeSuggOnBlur"
                }],
                staticClass: "suggestions",
                attrs: {
                    tabindex: "0"
                }
            }, [i("div", {
                staticClass: "el-scrollbar"
            }, [i("div", {
                staticClass: "scroll-wrap"
            }, [e.showTopicSelect ? i("ul", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: e.scrollTopic,
                    expression: "scrollTopic"
                }],
                staticClass: "dropdown-list"
            }, [e._l(e.topicSearchList, (function(t, a) {
                return i("li", {
                    key: a,
                    staticClass: "item-drop",
                    on: {
                        click: function(i) {
                            return e.insertContent(t.name)
                        }
                    }
                }, [i("span", {}, [e._v("# " + e._s(t.name))]), 1 === t.type ? i("div", {
                    staticClass: "flag"
                }, [e._v("官方话题")]) : e._e(), i("span", {
                    staticClass: "plays"
                }, [e._v(e._s(t.views) + "次播放")])])
            }
            )), i("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showNewTopic,
                    expression: "showNewTopic"
                }],
                staticClass: "item-drop",
                on: {
                    click: function(t) {
                        return e.insertContent(e.queryTopic.keyword)
                    }
                }
            }, [i("span", {}, [e._v("# " + e._s(e.queryTopic.keyword))]), i("span", {
                staticClass: "plays"
            }, [i("el-button", {
                attrs: {
                    type: "text"
                }
            }, [e._v("创建新话题")])], 1)])], 2) : e._e(), e.showUserSelect ? i("ul", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: e.scrollFriend,
                    expression: "scrollFriend"
                }],
                staticClass: "dropdown-list"
            }, [e._l(e.userList, (function(t, a) {
                return i("li", {
                    key: a,
                    staticClass: "item-drop",
                    on: {
                        click: function(i) {
                            return e.insertContent(t, 2)
                        }
                    }
                }, [t.avatar ? i("img", {
                    staticClass: "user-img",
                    attrs: {
                        src: t.avatar
                    }
                }) : i("img", {
                    staticClass: "user-img",
                    attrs: {
                        src: e.avatar
                    }
                }), i("span", {
                    staticClass: "user-name"
                }, [e._v(e._s(t.nick_name))])])
            }
            )), 0 === e.userList.length ? i("li", {
                staticClass: "item-drop"
            }, [i("span", {
                staticClass: "user-name"
            }, [e._v("暂无数据")])]) : e._e()], 2) : e._e()])])]), i("div", {
                staticClass: "btn"
            }, [i("el-button", {
                attrs: {
                    type: "text"
                },
                on: {
                    click: e.handleAddTopic
                }
            }, [e._v("# 话题")]), i("el-button", {
                attrs: {
                    type: "text"
                },
                on: {
                    click: e.handleAddUser
                }
            }, [e._v("@ 好友")])], 1), i("div", {
                staticClass: "topic"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showLeftArrow,
                    expression: "showLeftArrow"
                }],
                staticClass: "left-box"
            }, [i("div", {
                staticClass: "left-arrow",
                on: {
                    click: e.handleScrollLeft
                }
            })]), i("div", {
                ref: "topicScroll",
                staticClass: "scroll-text"
            }, e._l(e.topicList, (function(t, a) {
                return i("span", {
                    key: a,
                    on: {
                        click: function(i) {
                            return e.insertContent("#" + t.name)
                        }
                    }
                }, [e._v("#" + e._s(t.name))])
            }
            )), 0), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showRightArrow,
                    expression: "showRightArrow"
                }],
                staticClass: "right-box"
            }, [i("div", {
                staticClass: "right-arrow",
                on: {
                    click: e.handleScrollRight
                }
            })])])])
        }
          , u = []
          , d = i("c7eb")
          , f = i("1da1")
          , h = (i("b64b"),
        i("466d"),
        i("d3b7"),
        i("159b"),
        i("7db0"),
        i("ad9d"),
        i("a15b"),
        i("4de4"),
        i("f52a"))
          , m = i("986e")
          , p = {
            bind: function(e, t, i) {
                function a(i) {
                    if (e.contains(i.target))
                        return !1;
                    t.expression && t.value(i.target)
                }
                e.__vueClickOutside__ = a,
                document.addEventListener("click", a)
            },
            update: function() {},
            unbind: function(e, t) {
                document.removeEventListener("click", e.__vueClickOutside__),
                delete e.__vueClickOutside__
            }
        }
          , v = {
            name: "ReleaseTextarea",
            directives: {
                clickoutside: p
            },
            props: {},
            data: function() {
                return {
                    wordCount: 0,
                    showSugg: !1,
                    showTopicSelect: !1,
                    showUserSelect: !1,
                    topicList: [],
                    topicSearchList: [],
                    userList: [],
                    form: {
                        title: "",
                        pic_url: "",
                        play_url: [],
                        size: "",
                        times: "",
                        release_status: "",
                        v_id: "",
                        is_show: "",
                        lng: "",
                        lat: "",
                        province: "",
                        city: "",
                        address: "",
                        muti_user_id: "",
                        muti_talk_id: "",
                        way: "",
                        push_time: "",
                        event_name: "",
                        event_url: ""
                    },
                    scorllWidth: 0,
                    showLeftArrow: !1,
                    showRightArrow: !0,
                    topicStartPos: "",
                    endPos: "",
                    queryTopic: {
                        page: 1,
                        limit: 10,
                        keyword: ""
                    },
                    queryUser: {
                        page: 1,
                        limit: 10,
                        keyword: ""
                    },
                    showNewTopic: !1,
                    testTopicList: [],
                    atUserList: []
                }
            },
            computed: Object(o["a"])({}, Object(l["b"])(["avatar"])),
            watch: {
                "form.title": {
                    handler: function() {
                        this.handdleInput()
                    }
                }
            },
            created: function() {
                var e = this;
                this.getTopicList(),
                m["a"].$on("haveDraftData", (function(t) {
                    e.handleHaveDraftData(t)
                }
                ))
            },
            methods: {
                handleHaveDraftData: function(e) {
                    var t = e.title
                      , i = e.at_user_list;
                    this.form.title = t,
                    this.atUserList = JSON.parse(JSON.stringify(i)) || []
                },
                handldeSearch: function() {
                    var e = this.form.title.split(" ")
                      , t = e[e.length - 1]
                      , i = t.lastIndexOf("#")
                      , a = t.lastIndexOf("@");
                    this.queryTopic.keyword = this.getLastTopicOrFriend(),
                    this.queryUser.keyword = this.getLastTopicOrFriend(),
                    -1 === i && -1 === a ? this.handlePressSpace() : i > -1 && a > -1 ? i > a ? this.searchTopic() : this.searchFriend() : i > -1 ? this.searchTopic() : a > -1 && this.searchFriend()
                },
                getLastTopicOrFriend: function() {
                    if (0 === this.form.title.length)
                        return !1;
                    var e = /(?<=[#@])(?![\w\W]*?[#@])[^\s@#]*/g
                      , t = this.form.title.match(e);
                    return t ? t[0] : ""
                },
                getTitleFriend: function() {
                    var e = this;
                    if (0 === this.$refs.showText.innerHTML.length)
                        return !1;
                    var t = this.atUserList.map((function(e) {
                        return e.nick_name || e.name
                    }
                    ))
                      , i = [];
                    t.forEach((function(t) {
                        var a = e.$refs.showText.innerHTML.replace("@" + t, (function(e, a) {
                            return i.push("@" + t),
                            "<b>".concat(e, "</b>")
                        }
                        ));
                        e.$refs.showText.innerHTML = a
                    }
                    )),
                    this.atUserList.forEach((function(e) {
                        e.isMatch = 2;
                        var t = i.find((function(t) {
                            var i = t.replaceAll("@", "");
                            return i === e.nick_name || e.name
                        }
                        ));
                        t && (e.isMatch = 1)
                    }
                    ))
                },
                handdleInput: function(e) {
                    var t = this.form.title.replace(/#[^#\s@]+(?=[\s@#])/g, (function(e, t) {
                        return "<b>".concat(e, "</b>")
                    }
                    ));
                    this.$refs.showText.innerHTML = t,
                    this.getTitleFriend(),
                    this.wordCount = this.form.title.length,
                    this.handldeSearch()
                },
                insert: function(e, t) {
                    var i = this;
                    return Object(f["a"])(Object(d["a"])().mark((function t() {
                        var a, s, n, r, o, l, c, u, f, h;
                        return Object(d["a"])().wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a = i.$refs.text,
                                    a.focus(),
                                    !(a.value.length + e.length > 55)) {
                                        t.next = 6;
                                        break
                                    }
                                    return s = "无法".concat(i.showUserSelect ? "@用户" : "插入话题", ",长度超出限制"),
                                    i.$message.warning(s),
                                    t.abrupt("return", !1);
                                case 6:
                                    if (!a.selectionStart || 0 === a.selectionStart) {
                                        t.next = 20;
                                        break
                                    }
                                    return n = a.selectionStart,
                                    r = a.selectionEnd,
                                    o = a.value.substring(0, n),
                                    l = o,
                                    "#" !== e && "@" !== e && (c = o.split(" "),
                                    u = c[c.length - 1],
                                    f = u.indexOf("#") > -1 && u.indexOf("@") > -1 ? u.indexOf("#") > u.indexOf("@") ? u.indexOf("#") : u.indexOf("@") : u.indexOf("#") > -1 ? u.indexOf("#") : u.indexOf("@") > -1 ? u.indexOf("@") : u.length,
                                    h = u.substring(0, f + 1),
                                    c[c.length - 1] = h,
                                    l = c.join(" ")),
                                    i.form.title = l + e + a.value.substring(r, a.value.length),
                                    t.next = 16,
                                    i.$nextTick();
                                case 16:
                                    a.focus(),
                                    a.setSelectionRange(r + e.length, r + e.length),
                                    t.next = 25;
                                    break;
                                case 20:
                                    return i.form.title += e,
                                    t.next = 23,
                                    i.$nextTick();
                                case 23:
                                    a.focus(),
                                    a.setSelectionRange(e.length, e.length);
                                case 25:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                handlePressSpace: function() {
                    this.showSugg = !1,
                    this.showTopicSelect = !1,
                    this.showUserSelect = !1
                },
                handleAddTopic: function() {
                    this.showSugg = !0,
                    this.showTopicSelect = !0,
                    this.insert("#")
                },
                handleAddUser: function() {
                    this.showSugg = !0,
                    this.showUserSelect = !0,
                    this.insert("@")
                },
                insertContent: function(e, t) {
                    if (t) {
                        if (-1 !== this.form.title.indexOf("@" + e + " "))
                            return !1;
                        this.insert(e.nick_name + " ");
                        var i = this.atUserList.find((function(t) {
                            return t.user_id === e.user_id
                        }
                        ));
                        i || this.atUserList.push(e)
                    } else {
                        var a = "#" + e + " ";
                        if (e.indexOf("#") > -1 && (a = e + " "),
                        -1 !== this.form.title.indexOf(a))
                            return !1;
                        this.insert(e + " ")
                    }
                    this.showSugg = !1,
                    this.showTopicSelect = !1,
                    this.showUserSelect = !1
                },
                handldeSuggOnBlur: function(e) {
                    if (e.innerHTML.indexOf("# 话题") > -1 || e.innerHTML.indexOf("@ 好友") > -1)
                        return !1;
                    this.showSugg = !1,
                    this.showTopicSelect = !1,
                    this.showUserSelect = !1
                },
                handleScrollLeft: function() {
                    this.scorllWidth += 120,
                    this.showRightArrow = !0,
                    this.$refs.topicScroll.style.transition = "transform .5s linear",
                    this.$refs.topicScroll.style.transform = "translateX(".concat(this.scorllWidth, "px)"),
                    0 === this.scorllWidth && (this.showLeftArrow = !1,
                    this.showRightArrow = !0)
                },
                handleScrollRight: function() {
                    var e = this.$refs.topicScroll.clientWidth - 560;
                    if (Math.abs(this.scorllWidth) > e)
                        return this.showRightArrow = !1,
                        !1;
                    this.scorllWidth -= 120,
                    this.$refs.topicScroll.style.transition = "transform .5s linear",
                    this.$refs.topicScroll.style.transform = "translateX(".concat(this.scorllWidth, "px)"),
                    this.showLeftArrow = !0
                },
                getTopicList: function() {
                    var e = this;
                    Object(h["e"])(Object(o["a"])(Object(o["a"])({}, this.queryTopic), {}, {
                        type: 1
                    })).then((function(t) {
                        e.topicList = t.data.data,
                        e.topicSearchList = t.data.data
                    }
                    ))
                },
                searchTopic: function() {
                    var e = this;
                    this.showSugg = !0,
                    this.showTopicSelect = !0,
                    this.showUserSelect = !1,
                    this.queryTopic.page = 1,
                    Object(h["e"])(this.queryTopic).then((function(t) {
                        e.topicSearchList = t.data.data;
                        var i = 0;
                        e.topicSearchList.map((function(t) {
                            t.name === e.queryTopic.keyword && i++
                        }
                        )),
                        0 === i && e.queryTopic.keyword ? e.showNewTopic = !0 : e.showNewTopic = !1
                    }
                    ))
                },
                scrollTopic: function() {
                    var e = this;
                    this.queryTopic.page++,
                    Object(h["e"])(this.queryTopic).then((function(t) {
                        e.topicSearchList.push.apply(e.topicSearchList, t.data.data)
                    }
                    ))
                },
                searchFriend: function() {
                    var e = this;
                    this.showSugg = !0,
                    this.showTopicSelect = !1,
                    this.showUserSelect = !0,
                    this.queryUser.page = 1,
                    Object(h["c"])(this.queryUser).then((function(t) {
                        e.userList = t.data.data
                    }
                    ))
                },
                scrollFriend: function() {
                    var e = this;
                    this.queryUser.page++,
                    Object(h["c"])(this.queryUser).then((function(t) {
                        e.userList.push.apply(e.userList, t.data.data)
                    }
                    ))
                },
                handleSaveTitle: function() {
                    var e = this;
                    setTimeout((function() {
                        var t = e.form.title.split(" ")
                          , i = t[t.length - 1];
                        i.indexOf("#") > -1 && "#" !== i && (e.form.title += " "),
                        e.atUserList.length > 0 && (e.form.muti_user_id = e.atUserList.filter((function(e) {
                            return 1 === e.isMatch
                        }
                        )).map((function(e) {
                            return e.user_id
                        }
                        )).join(",")),
                        e.$emit("handleSaveTitle", {
                            title: e.form.title,
                            muti_user_id: e.form.muti_user_id
                        })
                    }
                    ), 500)
                }
            }
        }
          , g = v
          , _ = (i("793d"),
        i("2877"))
          , w = Object(_["a"])(g, c, u, !1, null, "fe71e1fe", null)
          , y = w.exports
          , b = i("2934")
          , T = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div")
        }
          , S = []
          , C = {
            name: "ReleasePreview",
            props: {},
            data: function() {
                return {
                    location: {
                        province: "",
                        city: "",
                        lat: "",
                        lng: ""
                    }
                }
            },
            computed: Object(o["a"])({}, Object(l["b"])(["userData", "avatar"])),
            mounted: function() {
                this.getLocation()
            },
            methods: {
                getLocation: function() {
                    var e = this;
                    AMap.plugin("AMap.Geolocation", (function() {
                        var t = new AMap.Geolocation({
                            enableHighAccuracy: !0,
                            timeout: 1e4,
                            buttonOffset: new AMap.Pixel(10,20),
                            zoomToAccuracy: !0,
                            buttonPosition: "RB"
                        });
                        function i(t) {
                            var i = t.addressComponent
                              , a = t.position;
                            e.location.province = i.province,
                            e.location.city = i.city,
                            e.location.lat = a.lat,
                            e.location.lng = a.lng,
                            e.$emit("getLocation", e.location)
                        }
                        function a(e) {}
                        t.getCurrentPosition(),
                        AMap.event.addListener(t, "complete", i),
                        AMap.event.addListener(t, "error", a)
                    }
                    ))
                }
            }
        }
          , x = C
          , D = (i("0f05"),
        Object(_["a"])(x, T, S, !1, null, "dd6d9f46", null))
          , $ = D.exports
          , O = i("ed08")
          , k = {
            name: "ReleaseContent",
            components: {
                releaseTextarea: y,
                AmapLocation: $
            },
            directives: {
                "el-select-loadmore": {
                    bind: function(e, t) {
                        var i = e.querySelector(".el-select-dropdown .el-select-dropdown__wrap");
                        i.addEventListener("scroll", (function() {
                            var e = this.scrollHeight - this.scrollTop <= this.clientHeight;
                            e && t.value()
                        }
                        ))
                    }
                }
            },
            props: {},
            data: function() {
                return {
                    accept: ".jpg,.jpeg,.png,.bmp,.webp",
                    collectTypes: [],
                    placeList: [],
                    placeQuery: {
                        pageSize: 10,
                        pageIndex: 1
                    },
                    form: {
                        title: "",
                        pic_url: "",
                        play_url: "",
                        sizes: "",
                        times: "",
                        release_status: 1,
                        v_id: "",
                        is_show: 2,
                        lng: "",
                        lat: "",
                        province: "",
                        city: "",
                        address: "",
                        muti_user_id: "",
                        muti_talk_id: "",
                        way: 1,
                        push_time: "",
                        event_name: "",
                        event_url: "",
                        is_collection: 1,
                        collection_id: "",
                        is_original: 1,
                        md5: ""
                    },
                    pickerOptions: {
                        disabledDate: function(e) {
                            var t = 864e5
                              , i = Date.now() + 7 * t;
                            return e.getTime() < Date.now() - t || e.getTime() > i
                        }
                    },
                    pickerOptionsTime: {
                        selectableRange: "00:00:00 - 23:59:59"
                    },
                    sendTime: {
                        date: "",
                        time: ""
                    },
                    loading: !1
                }
            },
            computed: Object(o["a"])({}, Object(l["b"])(["userData"])),
            watch: {},
            created: function() {
                var e = this
                  , t = new Date(+new Date + 3e5).format("hh:mm");
                this.pickerOptionsTime.selectableRange = "".concat(t, ":00 - 23:59:59"),
                this.getCollectionDropdown(),
                m["a"].$on("onVideoUploadFinish", (function(t) {
                    t.pic_url && (e.form.pic_url = t.pic_url),
                    e.form.v_id = t.v_id,
                    e.form.times = t.times,
                    e.form.sizes = t.sizes,
                    e.form.play_url = t.play_url || t.pic_url,
                    e.handleSaveDraft()
                }
                )),
                m["a"].$on("haveDraftData", (function(t) {
                    e.handleHaveDraftData(t)
                }
                )),
                m["a"].$on("saveDraftData", (function(t) {
                    Object.assign(e.form, t),
                    e.handleSaveDraft()
                }
                ))
            },
            beforeDestroy: function() {
                m["a"].$off("saveDraftData"),
                m["a"].$off("haveDraftData"),
                m["a"].$off("onVideoUploadFinish")
            },
            methods: {
                handleHaveDraftData: function(e) {
                    e.push_time && (this.sendTime.date = new Date(1e3 * e.push_time).format("yyyy-MM-dd"),
                    this.sendTime.time = new Date(1e3 * e.push_time).format("hh:mm:ss")),
                    Object.assign(this.form, e),
                    e.pic_url && (this.form.pic_url = e.pic_url),
                    this.$forceUpdate()
                },
                getCollectionDropdown: function() {
                    var e = this;
                    Object(b["b"])().then((function(t) {
                        "{}" === JSON.stringify(t.data) && (t.data = []),
                        t.data.map((function(t) {
                            var i = {
                                label: t.name,
                                value: t.id
                            };
                            e.collectTypes.push(i)
                        }
                        )),
                        e.collectTypes.unshift({
                            label: "请选择合集",
                            value: 0
                        })
                    }
                    ))
                },
                parseImg: function(e) {
                    return e
                },
                getLocation: function() {
                    var e = {
                        enableHighAccuracy: !0,
                        maximumAge: 1e3
                    };
                    navigator.geolocation && navigator.geolocation.getCurrentPosition(this.handleGetLocationSuccess, this.handleGetLocationFail, e)
                },
                handleLocation: function(e) {
                    this.form.province = e.province,
                    this.form.city = e.city,
                    this.form.lng = e.lng,
                    this.form.lat = e.lat,
                    this.getPlaceInfo()
                },
                loadmore: function() {
                    this.placeQuery.pageIndex++,
                    this.getPlaceInfo()
                },
                getPlaceInfo: function(e) {
                    var t = this
                      , i = e || "";
                    AMap.service(["AMap.PlaceSearch"], (function() {
                        var e = new AMap.PlaceSearch({
                            pageSize: t.placeQuery.pageSize,
                            pageIndex: t.placeQuery.pageIndex,
                            city: t.form.city,
                            citylimit: !0
                        });
                        e.searchNearBy(i, [t.form.lng, t.form.lat], 1e4, (function(e, i) {
                            if ("OK" === i.info) {
                                var a = i.poiList.pois;
                                t.placeList.push.apply(t.placeList, a)
                            }
                        }
                        ))
                    }
                    ))
                },
                searchPlace: function(e) {
                    this.placeQuery.pageIndex = 1,
                    this.placeList = [],
                    this.getPlaceInfo(e)
                },
                handleGetLocationSuccess: function(e) {},
                handleGetLocationFail: function(e) {},
                handleChooseFile: function() {
                    this.$refs.imginput.click()
                },
                handleChange: function(e) {
                    var t = e.target.files[0]
                      , i = this.accept.replace(/\./g, "").replace(/,/g, "|");
                    return new RegExp(".(".concat(i, ")$"),"i").test(t.name) ? t.size > 1048576 ? (this.$message({
                        type: "error",
                        message: "文件不能大于1MB"
                    }),
                    this.$refs.imginput.value = "",
                    !1) : void this.uploadImg(t) : (this.$message({
                        type: "error",
                        message: "目前只支持".concat(this.accept, "格式")
                    }),
                    this.$refs.imginput.value = "",
                    !1)
                },
                uploadImg: function(e) {
                    var t = this
                      , i = new FormData;
                    i.append("file_name", e),
                    Object(b["o"])(i).then((function(e) {
                        t.form.pic_url = e.data.url,
                        t.$refs.imginput.value = "",
                        m["a"].$emit("setPreviewPic", t.form.pic_url),
                        t.handleSaveDraft()
                    }
                    )).catch((function(e) {
                        t.$refs.imginput.value = ""
                    }
                    ))
                },
                handleSaveTitle: function(e) {
                    this.form.title = e.title,
                    this.form.muti_user_id = e.muti_user_id,
                    m["a"].$emit("setPreviewTitle", e.title),
                    this.handleSaveDraft()
                },
                handleSpace: function() {
                    this.form.event_url = this.form.event_url.replace(/\s/g, "")
                },
                handleLinkUrl: function() {
                    this.url.link ? this.form.event_url = this.url.head + this.url.link.replace(/\s/g, "") : this.form.event_url = "",
                    this.handleSaveDraft()
                },
                haneSendDate: function() {
                    if (this.sendTime.date === (new Date).format("yyyy-MM-dd")) {
                        this.sendTime.time = "";
                        var e = new Date(+new Date + 3e5).format("hh:mm");
                        this.pickerOptionsTime.selectableRange = "".concat(e, ":00 - 23:59:59")
                    } else
                        this.pickerOptionsTime.selectableRange = "00:00:00 - 23:59:59";
                    this.sendTime.date && (this.form.push_time = this.sendTime.date + this.sendTime.time,
                    this.handleSaveDraft())
                },
                haneSendTime: function() {
                    this.sendTime.date && (this.form.push_time = this.sendTime.date + this.sendTime.time,
                    this.handleSaveDraft())
                },
                handleSaveDraft: function() {
                    1 === this.form.is_show && (this.address = ""),
                    1 === this.form.way && (this.sendTime = this.$options.data().sendTime,
                    this.form.push_time = ""),
                    1 === this.is_collection && (this.form.collection_id = 0),
                    this.saveDraftData()
                },
                saveDraftData: Object(O["c"])((function() {
                    Object(h["f"])(this.form).then((function(e) {}
                    ))
                }
                ), 1e3),
                delDraftInfo: function() {
                    Object(h["a"])().then((function(e) {}
                    ))
                },
                handleCancel: function() {
                    this.handleSaveDraft(),
                    this.$router.push({
                        name: "VideoList"
                    })
                },
                checkvalue: function() {
                    var e = !1;
                    return this.form.title ? 2 !== this.form.is_show || this.form.address ? 2 !== this.form.way || this.sendTime.date && this.sendTime.time ? 2 !== this.form.is_collection || this.form.collection_id && 0 !== this.form.collection_id ? this.form.play_url ? (e = !0,
                    e) : (this.$message.warning("请上传视频"),
                    !1) : (this.$message.warning("请选择合集"),
                    !1) : (this.$message.warning("请选择推送时间"),
                    !1) : (this.$message.warning("请选择位置"),
                    !1) : (this.$message.warning("请填写作品标题"),
                    !1)
                },
                handleRelease: function() {
                    var e = this;
                    if (!this.checkvalue())
                        return !1;
                    this.loading = !0,
                    Object(h["g"])(this.form).then((function(t) {
                        e.loading = !1,
                        e.delDraftInfo(),
                        e.$message.success("作品发布成功"),
                        e.$router.push({
                            name: "VideoList"
                        })
                    }
                    )).catch((function() {
                        e.loading = !1
                    }
                    ))
                }
            }
        }
          , L = k
          , U = (i("5dbd"),
        Object(_["a"])(L, n, r, !1, null, "8e219584", null))
          , P = U.exports
          , j = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "main-right"
            }, [e._m(0), i("div", {
                staticClass: "mobile"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == e.percent,
                    expression: "percent==0"
                }, {
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                attrs: {
                    id: "mse",
                    "element-loading-text": "视频转码中",
                    "element-loading-background": "rgba(255, 255, 255, 0)",
                    "element-custom-class": "load-color"
                }
            }), e.showRefresh ? i("el-link", {
                staticClass: "btn-refresh",
                attrs: {
                    underline: !1
                },
                on: {
                    click: e.setPlayTimer
                }
            }, [e._v("刷新")]) : e._e(), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.percent > 0,
                    expression: "percent>0"
                }],
                staticClass: "progress-box"
            }, [i("span", {
                staticClass: "filename"
            }, [e._v(e._s(e.fileName))]), i("el-progress", {
                staticClass: "bar",
                attrs: {
                    percentage: e.percent
                }
            })], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == e.percent,
                    expression: "percent==0"
                }],
                staticClass: "text"
            }, [i("span", {
                staticClass: "name"
            }, [e._v("@" + e._s(e.userData.nick_name))]), i("span", {
                staticClass: "text-title"
            }, [e._v(" " + e._s(e.form.title) + " ")]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.form.v_id,
                    expression: "form.v_id"
                }],
                staticClass: "music"
            }, [i("img", {
                attrs: {
                    src: "/img/icon_music.png"
                }
            }), i("div", {
                staticClass: "music-title"
            }, [i("span", [e._v("@" + e._s(e.userData.nick_name) + "创作的原声")])])])]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == e.percent,
                    expression: "percent==0"
                }],
                staticClass: "icon"
            }, [i("div", {
                staticClass: "user-avatar"
            }, [e.userData.avatar ? i("img", {
                staticClass: "avatar",
                attrs: {
                    src: e.userData.avatar
                }
            }) : i("img", {
                staticClass: "avatar",
                attrs: {
                    src: e.avatar
                }
            }), e._m(1)]), i("img", {
                attrs: {
                    src: "/img/icon_favor.png"
                }
            }), i("span", [e._v("...")]), i("img", {
                attrs: {
                    src: "/img/icon_comment.png"
                }
            }), i("span", [e._v("...")]), i("img", {
                attrs: {
                    src: "/img/icon_share.png"
                }
            }), i("span", [e._v("...")])])], 1), i("div", {
                staticClass: "btn"
            }, [i("el-button", {
                staticClass: "btn-reupload",
                attrs: {
                    icon: "el-icon-top"
                },
                on: {
                    click: e.handleChooseFile
                }
            }, [e._v("重新上传")]), i("input", {
                ref: "file",
                attrs: {
                    type: "file",
                    hidden: "",
                    accept: e.accept
                },
                on: {
                    change: e.handleChange
                }
            })], 1), i("inputTTUploader", {
                ref: "ttUploader",
                on: {
                    getVid: e.getVid,
                    getPercent: e.getPercent,
                    updateError: e.updateError,
                    getVid2: e.getVid2
                }
            })], 1)
        }
          , I = [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "title"
            }, [i("div", {
                staticClass: "hr"
            }), i("span", [e._v("硬声App端预览效果")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "plus"
            }, [i("i", {
                staticClass: "el-icon-plus"
            })])
        }
        ]
          , R = (i("2532"),
        i("3ca3"),
        i("ddb0"),
        i("2b3d"),
        i("9861"),
        i("caad"),
        function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div")
        }
        )
          , A = []
          , N = (i("ace4"),
        i("5cc6"),
        i("9a8c"),
        i("a975"),
        i("735e"),
        i("c1ac"),
        i("d139"),
        i("3a7b"),
        i("d5d6"),
        i("82f8"),
        i("e91f"),
        i("60bd"),
        i("5f96"),
        i("3280"),
        i("3fcc"),
        i("ca91"),
        i("25a1"),
        i("cd26"),
        i("3c5d"),
        i("2954"),
        i("649e"),
        i("219c"),
        i("170b"),
        i("b39a"),
        i("72f7"),
        i("e792"))
          , M = i.n(N)
          , F = i("0619")
          , V = i.n(F)
          , E = i("69a0")
          , q = i.n(E)
          , z = {
            data: function() {
                return {
                    uploader: {},
                    ttconfig: {},
                    initTime: "",
                    signature: "",
                    tcVod: ""
                }
            },
            created: function() {
                this.tcVod = new V.a({
                    getSignature: b["g"]
                })
            },
            methods: {
                initConfig: function(e) {
                    var t = this;
                    Object(b["n"])({}).then((function(i) {
                        t.ttconfig = i.data,
                        t.initTTUploader(e)
                    }
                    ))
                },
                initTTUploader: function(e) {
                    var t = this;
                    this.initTime = new Date,
                    this.uploader = new M.a({
                        userId: this.ttconfig.userId,
                        appId: this.ttconfig.appId,
                        videoConfig: {
                            spaceName: this.ttconfig.spaceName,
                            processAction: [{
                                name: "GetMeta",
                                input: {
                                    void: ""
                                }
                            }, {
                                name: "Snapshot",
                                input: {
                                    SnapshotInput: "PosterUri"
                                }
                            }]
                        }
                    }),
                    this.uploader.on("complete", (function(e) {
                        var i = {
                            vid: e.uploadResult.Vid,
                            pic_url: e.uploadResult.PosterUri,
                            time: e.uploadResult.SourceInfo.Duration,
                            md5: e.uploadResult.SourceInfo.Md5
                        };
                        t.$emit("getVid", i)
                    }
                    )),
                    this.uploader.on("error", (function(e) {
                        console.log('222', e)
                        t.$emit("updateError"),
                        t.$message({
                            type: "error",
                            message: "上传视频出错，请重新上传！"
                        })
                    }
                    )),
                    this.uploader.on("progress", (function(e) {
                        t.$emit("getPercent", e.percent, e.duration)
                    }
                    )),
                    "function" === typeof e && e()
                },
                UploadFile: function(e) {
                    var t = this;
                    new Date - this.initTime > 3e6 ? this.initConfig((function() {
                        t.ttUploadFile(e)
                    }
                    )) : this.ttUploadFile(e)
                },
                ttUploadFile: function(e) {
                    var t = this.uploader.addFile({
                        file: e,
                        stsToken: {
                            SessionToken: this.ttconfig.SessionToken,
                            SecretAccessKey: this.ttconfig.SecretAccessKey,
                            AccessKeyID: this.ttconfig.AccessKeyID
                        },
                        type: "video",
                        callbackArgs: "addFinish"
                    });
                    this.uploader.start(t)
                },
                readFile: function(e, t) {
                    var i = new FileReader;
                    i.readAsDataURL(e),
                    i.onload = function(e) {
                        var i, a = e.target.result;
                        i = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : unescape(a.split(",")[1]);
                        for (var s = a.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(i.length), r = 0; r < i.length; r++)
                            n[r] = i.charCodeAt(r);
                        var o = new Blob([n],{
                            type: s
                        });
                        t(o)
                    }
                },
                UploadFile2: function(e) {
                    this.saveImgByCanvas(e)
                },
                UploadFileRequest: function(e, t) {
                    var i = this;
                    if (this.tcVod instanceof Object) {
                        var a = "";
                        if (e) {
                            var s = new FileReader;
                            s.onload = function() {
                                var e = new q.a.ArrayBuffer;
                                e.append(s.result),
                                a = e.end()
                            }
                            ,
                            s.readAsArrayBuffer(e)
                        }
                        var n = this.tcVod.upload({
                            mediaFile: e
                        });
                        n.on("media_progress", (function(e) {
                            i.$emit("getPercent", parseInt(100 * e.percent))
                        }
                        )),
                        n.done().then((function(e) {
                            e.md5 = a;
                            var s = new FormData;
                            s.append("file_name", t),
                            Object(b["m"])(s).then((function(t) {
                                var a;
                                e.poster = null === t || void 0 === t || null === (a = t.data) || void 0 === a ? void 0 : a.url,
                                i.$emit("getVid2", e)
                            }
                            ))
                        }
                        )).catch((function(e) {
                            console.log('111', e)
                            i.$emit("updateError"),
                            i.$message({
                                type: "error",
                                message: "上传视频出错，请重新上传！"
                            })
                        }
                        ))
                    }
                },
                saveImgByCanvas: function(e) {
                    var t = this
                      , i = document.createElement("video")
                      , a = URL.createObjectURL(e);
                    i.src = a,
                    i.currentTime = 1,
                    i.addEventListener("loadeddata", (function() {
                        var a = document.createElement("canvas")
                          , s = a.getContext("2d");
                        a.width = i.videoWidth / 2,
                        a.height = i.videoHeight / 2,
                        i.addEventListener("canplay", (function() {
                            s.drawImage(i, 0, 0, i.videoWidth, i.videoHeight, 0, 0, i.videoWidth / 2, i.videoHeight / 2);
                            var n = a.toDataURL();
                            t.UploadFileRequest(e, Object(O["b"])(n, "poster.png"))
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , G = z
          , H = Object(_["a"])(G, R, A, !1, null, "24f9232b", null)
          , B = H.exports
          , W = i("5392")
          , J = i.n(W)
          , K = i("7336")
          , Q = i.n(K)
          , X = {
            name: "ReleasePreview",
            components: {
                inputTTUploader: B
            },
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    accept: ".m4v,.mp4,.wmv,.mpg,.webm,.mov,.asx,.mpeg,.avi",
                    percent: 0,
                    fileName: "",
                    xgplayer: null,
                    form: {
                        title: "",
                        pic_url: "",
                        play_url: "",
                        sizes: "",
                        times: "",
                        v_id: "",
                        md5: ""
                    },
                    videoData: {},
                    haveSave: !1,
                    playTimer: null,
                    tryPlayNum: 0,
                    loading: !1,
                    showRefresh: !1,
                    fileSizeLimit: 2147483648
                }
            },
            computed: Object(o["a"])({}, Object(l["b"])(["userData", "avatar"])),
            watch: {},
            created: function() {
                var e = this;
                this.getDraftInfo(),
                m["a"].$on("setPreviewTitle", (function(t) {
                    e.form.title = t
                }
                )),
                m["a"].$on("setPreviewPic", (function(t) {
                    e.form.pic_url = t
                }
                ))
            },
            beforeDestroy: function() {
                window.clearInterval(this.playTimer),
                this.playTimer = null,
                m["a"].$off("setPreviewTitle"),
                m["a"].$off("setPreviewPic")
            },
            methods: {
                getDraftInfo: function() {
                    var e = this;
                    Object(h["b"])().then((function(t) {
                        t.data.id && (Object.assign(e.form, t.data),
                        e.enterPageGetVideoInfo2())
                    }
                    ))
                },
                setPlayTimer: function() {
                    var e = this;
                    this.loading = !0,
                    this.showRefresh = !1,
                    this.playTimer = setInterval((function() {
                        ++e.tryPlayNum,
                        e.getVideoInfoLoop()
                    }
                    ), 5e3)
                },
                handleHaveDraftData: function(e) {
                    var t = this;
                    Object.assign(this.form, e),
                    0 === this.tryPlayNum && (this.tryPlayNum++,
                    setTimeout((function() {
                        e.v_id && t.setVideo(e.v_id, e.pic_url)
                    }
                    ), 300))
                },
                handleChooseFile: function() {
                    this.$refs.file.value = "",
                    this.$refs.file.click()
                },
                handleChange: function(e) {
                    var t = this;
                    this.xgplayer && (this.xgplayer.destroy(!0),
                    this.xgplayer = null),
                    this.form.pic_url = "";
                    var i = e.target.files[0]
                      , a = this.accept.replace(/\./g, "").replace(/,/g, "|");
                    if (!new RegExp(".(".concat(a, ")$"),"i").test(i.name))
                        return this.$message({
                            type: "warning",
                            message: "目前只支持".concat(this.accept, "格式")
                        }),
                        this.$refs.file.value = "",
                        !1;
                    if (i.size > this.fileSizeLimit)
                        return this.$message({
                            type: "warning",
                            message: "上传的作品超过限制，请按照要求上传"
                        }),
                        this.$refs.file.value = "",
                        !1;
                    var s = ".mp4,.webm,.mov".replace(/\./g, "").replace(/,/g, "|");
                    if (new RegExp(".(".concat(s, ")$"),"i").test(i.name)) {
                        var n;
                        n = "345".includes(this.userData.user_type) ? 900 : 180;
                        var r, o = URL.createObjectURL(i), l = new Audio(o);
                        l.addEventListener("loadedmetadata", (function(e) {
                            if (r = Math.ceil(l.duration),
                            r > n)
                                return t.showGuideMsg(),
                                t.$refs.file.value = "",
                                !1;
                            t.fileName = i.name,
                            t.form.sizes = i.size,
                            t.form.times = r,
                            t.$refs.ttUploader.UploadFile2(i),
                            t.haveSave = !1,
                            t.percent = .01
                        }
                        ))
                    } else
                        this.fileName = i.name,
                        this.form.sizes = i.size,
                        this.$refs.ttUploader.UploadFile2(i),
                        this.haveSave = !1,
                        this.percent = 1
                },
                showGuideMsg: function() {
                    var e = ["3", "4", "5", 3, 4, 5].includes(this.userData.user_type)
                      , t = e ? "请上传时长为15分钟以内的视频！" : "上传的作品超过限制！您可以在硬声App内完成个人认证后，上传15分钟以内的视频。";
                    this.$confirm(t, "信息提示", {
                        confirmButtonText: "立即解锁",
                        type: "warning",
                        showClose: !0,
                        showConfirmButton: !e,
                        showCancelButton: !1,
                        closeOnClickModal: !1
                    }).then((function() {
                        window.open("//yingsheng.elecfans.com/app?from=cp")
                    }
                    ))
                },
                getVid: function(e) {
                    var t = this;
                    this.form.v_id = e.vid,
                    e.pic_url && (this.form.pic_url || (this.form.pic_url = e.pic_url),
                    this.form.play_url = e.pic_url),
                    void 0 !== e.time && (this.form.times = Math.ceil(e.time)),
                    this.form.md5 = e.md5,
                    this.percent = 0,
                    this.haveSave || (this.haveSave = !0,
                    m["a"].$emit("saveDraftData", this.form),
                    setTimeout((function() {
                        t.afterUploadGetVideoInfo(t.form.v_id)
                    }
                    ), 1e3))
                },
                getPercent: function(e, t) {
                    this.percent = e
                },
                updateError: function() {
                    this.percent = 0
                },
                initPlayer: function(e, t) {
                    var i = this;
                    null === this.xgplayer ? (this.xgplayer = new J.a({
                        id: "mse",
                        url: e,
                        width: 233,
                        height: 395,
                        poster: t,
                        hasStart: !0,
                        autoplay: !0,
                        volume: 0,
                        loop: !0,
                        ignores: ["time", "fullscreen", "replay", "play", "progress", "volume"]
                    }),
                    this.xgplayer.on("canplay", (function() {
                        var e = document.querySelector("video").play();
                        e && e.catch((function(e) {
                            i.xgplayer.volume = 0,
                            i.xgplayer.play()
                        }
                        )).then((function() {
                            i.xgplayer.play()
                        }
                        ))
                    }
                    ))) : this.xgplayer.src = e
                },
                setVideo: function(e, t) {
                    var i = this;
                    Object(b["d"])({
                        vid: e
                    }).then((function(e) {
                        var a = e.data.token;
                        Q.a.url(a, "vod.volcengineapi.com").then((function(e) {
                            e.PlayInfoList.length > 0 && i.initPlayer(e.PlayInfoList[0].MainPlayUrl, t)
                        }
                        )).catch((function(e) {}
                        ))
                    }
                    ))
                },
                afterUploadGetVideoInfo: function(e) {
                    var t = this;
                    Object(b["j"])({
                        v_id: e
                    }).then((function(e) {
                        var i, a = JSON.parse(e.data.data), s = a.Result, n = s.MediaInfoList[0], r = n.BasicInfo, o = n.SourceInfo;
                        if (i = "345".includes(t.userData.user_type) ? 900 : 180,
                        o.Duration > i)
                            return t.showGuideMsg(),
                            t.form.v_id = "",
                            !1;
                        t.form.pic_url || (t.form.pic_url = r.PosterUri || ""),
                        t.form.times = Math.ceil(o.Duration) || 0,
                        m["a"].$emit("onVideoUploadFinish", t.form),
                        null === t.playTimer && 0 === t.tryPlayNum && t.setPlayTimer()
                    }
                    )).catch((function(e) {}
                    ))
                },
                getVideoInfoLoop: function() {
                    var e = this;
                    Object(b["j"])({
                        v_id: this.form.v_id
                    }).then((function(t) {
                        var i = JSON.parse(t.data.data)
                          , a = i.Result
                          , s = a.MediaInfoList[0]
                          , n = s.BasicInfo
                          , r = s.SourceInfo;
                        "Published" === n.PublishStatus ? (window.clearInterval(e.playTimer),
                        e.playTimer = null,
                        e.tryPlayNum = 0,
                        e.loading = !1,
                        e.form.pic_url && e.form.times && e.form.play_url || (e.form.pic_url || (e.form.pic_url = n.PosterUri || ""),
                        e.form.times = Math.ceil(r.Duration) || 0,
                        e.form.play_url = n.PosterUri || "1",
                        m["a"].$emit("onVideoUploadFinish", e.form)),
                        0 === e.tryPlayNum && null === e.playTimer && e.setVideo(e.form.v_id, e.form.pic_url)) : e.form.pic_url && e.form.times && e.form.play_url || (e.form.pic_url || (e.form.pic_url = n.PosterUri || ""),
                        e.form.times = Math.ceil(r.Duration) || 0,
                        e.form.play_url = n.PosterUri,
                        m["a"].$emit("onVideoUploadFinish", e.form))
                    }
                    )).catch((function(e) {}
                    ))
                },
                enterPageGetVideoInfo: function() {
                    var e = this;
                    this.form.v_id && Object(b["j"])({
                        v_id: this.form.v_id
                    }).then((function(t) {
                        var i = JSON.parse(t.data.data)
                          , a = i.Result
                          , s = a.MediaInfoList[0]
                          , n = s.BasicInfo
                          , r = s.SourceInfo;
                        "Published" === n.PublishStatus ? (e.form.pic_url && e.form.times && e.form.play_url || (e.form.pic_url = n.PosterUri || "",
                        e.form.times = Math.ceil(r.Duration) || 0,
                        e.form.play_url = n.PosterUri || "1",
                        m["a"].$emit("onVideoUploadFinish", e.form)),
                        e.setVideo(e.form.v_id, e.form.pic_url)) : null === e.playTimer && 0 === e.tryPlayNum && e.setPlayTimer()
                    }
                    )).catch((function(e) {}
                    ))
                },
                getVid2: function(e) {
                    var t, i = this;
                    this.form.fileid = e.fileId,
                    this.form.play_url = null === e || void 0 === e || null === (t = e.video) || void 0 === t ? void 0 : t.url,
                    this.form.md5 = e.md5,
                    this.form.pic_url = null === e || void 0 === e ? void 0 : e.poster,
                    this.percent = 0,
                    this.haveSave || (this.haveSave = !0,
                    m["a"].$emit("saveDraftData", this.form),
                    setTimeout((function() {
                        i.afterUploadGetVideoInfo2()
                    }
                    ), 1e3))
                },
                afterUploadGetVideoInfo2: function() {
                    var e = this
                      , t = ".mp4,.webm,.mov".replace(/\./g, "").replace(/,/g, "|");
                    if (new RegExp(".(".concat(t, ")$"),"i").test(this.form.play_url)) {
                        var i;
                        i = "345".includes(this.userData.user_type) ? 900 : 180;
                        var a, s = new Audio(this.form.play_url);
                        s.addEventListener("loadedmetadata", (function(t) {
                            if (a = Math.ceil(s.duration),
                            e.form.times = a,
                            a > i)
                                return e.showGuideMsg(),
                                e.$refs.file.value = "",
                                !1;
                            m["a"].$emit("onVideoUploadFinish", e.form)
                        }
                        ))
                    }
                    this.initPlayer(this.form.play_url)
                },
                enterPageGetVideoInfo2: function() {
                    this.form.play_url && (m["a"].$emit("onVideoUploadFinish", this.form),
                    this.initPlayer(this.form.play_url))
                }
            }
        }
          , Y = X
          , Z = (i("adf4"),
        Object(_["a"])(Y, j, I, !1, null, "3be0adc6", null))
          , ee = Z.exports
          , te = {
            name: "ReleaseVideo",
            components: {
                ReleaseContent: P,
                ReleasePreview: ee
            },
            data: function() {
                return {
                    fileData: "",
                    options: [],
                    listData: [],
                    form: {},
                    data: {}
                }
            },
            computed: {},
            watch: {
                $route: function() {}
            },
            created: function() {
                this.getDraftInfo()
            },
            mounted: function() {
                this.fileData = this.$route.params.file,
                this.fileData && this.handleReceiveVideo()
            },
            methods: {
                handleReceiveVideo: function() {
                    this.$refs.mobile.fileName = this.fileData.name,
                    this.$refs.mobile.$refs.ttUploader.UploadFile2(this.fileData),
                    this.$refs.mobile.form.sizes = this.fileData.size,
                    this.$refs.mobile.percent = .01
                },
                getDraftInfo: function() {
                    var e = this;
                    Object(h["b"])().then((function(t) {
                        t.data.id && (e.draftData = t.data,
                        m["a"].$emit("haveDraftData", e.draftData))
                    }
                    ))
                }
            }
        }
          , ie = te
          , ae = (i("58aa"),
        Object(_["a"])(ie, a, s, !1, null, "22083949", null));
        t["default"] = ae.exports
    },
    f52a: function(e, t, i) {
        "use strict";
        i.d(t, "g", (function() {
            return s
        }
        )),
        i.d(t, "f", (function() {
            return n
        }
        )),
        i.d(t, "b", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return o
        }
        )),
        i.d(t, "e", (function() {
            return l
        }
        )),
        i.d(t, "c", (function() {
            return c
        }
        )),
        i.d(t, "d", (function() {
            return u
        }
        )),
        i.d(t, "h", (function() {
            return d
        }
        ));
        var a = i("b775");
        function s(e) {
            return Object(a["a"])({
                url: "/creative/works/publish",
                method: "post",
                data: e
            })
        }
        function n(e) {
            return Object(a["a"])({
                url: "/creative/works/saveDraft",
                method: "post",
                data: e
            })
        }
        function r(e) {
            return Object(a["a"])({
                url: "/creative/works/draft",
                method: "get"
            })
        }
        function o(e) {
            return Object(a["a"])({
                url: "/creative/works/delDraft",
                method: "post"
            })
        }
        function l(e) {
            return Object(a["a"])({
                url: "/creative/talk/allList",
                method: "get",
                params: e
            })
        }
        function c(e) {
            return Object(a["a"])({
                url: "/creative/member/atList",
                method: "get",
                params: e
            })
        }
        function u(e) {
            return Object(a["a"])({
                url: "creative/member/getGuideNum",
                method: "get",
                params: e
            })
        }
        function d(e) {
            return Object(a["a"])({
                url: "creative/member/saveGuideNum",
                method: "get",
                params: e
            })
        }
    }
}]);
