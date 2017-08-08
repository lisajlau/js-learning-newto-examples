'use strict';
var bst = function(val) {
    
    var tree = {};
    
    function Node(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
    
    tree.root = new Node(val);
    
    tree.push = function(currentNode, val) {
        if(!this.root) {
            this.root = new Node(val);
            return;
        }
        
        if (!currentNode) {
            return new Node(val);
        }
        
        if(val > currentNode.value) {
            currentNode.right = this.push(currentNode.right, val);
        }
        else {
            currentNode.left = this.push(currentNode.left, val);
        }
        return currentNode;
    }
    
    return tree;
}

var binarySearchTree = function() {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    function tree() {
        this.root = null;
    }
    
    tree.prototype.push = function(currentNode, value) {
        if(!this.root) {
            this.root = new Node(value);
        }
        
        if(!currentNode) {
            return new Node(value);
        }
        
        if(value > currentNode.value) {
            currentNode.right = this.push(currentNode.right, value);
        }
        else {
            currentNode.left = this.push(currentNode.left, value);
        }
        
        return currentNode;
    }
    
    return new tree;
    
}