const kind = {
    method: 0,
    field: 3,
    property: 9,
    enum: 15
}

class Item {
    setType(type) {
        this.t = type
        return this
    }
    setName(name) {
        this.n = name
        return this
    }
    setKind(kind) {
        this.k = kind
        return this
    }
    setComment(comment) {
        this.c = comment
        return this
    }
    setParams(params) {
        this.p = params
        return this
    }
    setSortText(sortText) {
        this.sortText = sortText
        return this
    }
    setPreselect(preselect) {
        this.preselect = preselect
        return this
    }
}

module.exports = {
    kind: kind,
    Item: Item,
    isMethod: function(item) {
        return item.k === kind.method
    },
    isField: function(item) {
        return item.k === kind.field
    },
    isProperty: function(item) {
        return item.k === kind.property
    },
    isEnum: function(item) {
        return item.k === kind.enum
    },
    setMethod: function(item) {
        item.k = kind.method
    },
    setField: function(item) {
        item.k = kind.field
    },
    setProperty: function(item) {
        item.k = kind.property
    },
    getDefaultVal: function(item) {
        return item && item.dv;
    },
    isNamedVariant: function(item) {
        return item && item.nv === 1;
    },
    getConstructors: function(item) {
        return item && item.co;
    },
    getComment: function(item) {
        return item && (item.c || '');
    },
    getName: function(item) {
        return item && (item.name || item.n);
    },
    getType: function(item) {
        return item && (item.type || item.t);
    },
    getBody: function(item) {
        return item && item.b;
    },
    getParams: function(item) {
        return item && (item.params || item.p);
    }
}
