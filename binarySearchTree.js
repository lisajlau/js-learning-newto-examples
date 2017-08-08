function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = function(currentNode, val) {

    if(!this.root) {
        this.root = new Node(val);
        return;
    }
    
    var newNode = new Node(val);
    if(!currentNode) {
        return newNode;
    }
    
    if(val < currentNode.value) {
        currentNode.left = this.push(currentNode.left, val);
    }
    else if(val > currentNode.value) {
        currentNode.right = this.push(currentNode.right, val);
    }
    // No duplicates
    return currentNode;
    
//    while(currentNode) {
//        if(val < currentNode.value) {
//            if(!currentNode.left) {
//                currentNode.left = newNode;
//                break;
//            }
//            else {
//                currentNode = currentNode.left;
//            }
//        }
//        else {
//            if(!currentNode.right) {
//                currentNode.right = newNode;
//                break;
//            }
//            else {
//                currentNode = currentNode.right;
//            }
//        }
//    }
}

//BinarySearchTree.prototype.push = function(val) {
//    var root = this.root;
//    if(!root) {
//        this.root = new Node(val);
//        return;
//    }
//    
//    var currentNode = root;
//    var newNode = new Node(val);
//    
//    while(currentNode) {
//        if(val < currentNode.value) {
//            if(!currentNode.left) {
//                currentNode.left = newNode;
//                break;
//            }
//            else {
//                currentNode = currentNode.left;
//            }
//        }
//        else {
//            if(!currentNode.right) {
//                currentNode.right = newNode;
//                break;
//            }
//            else {
//                currentNode = currentNode.right;
//            }
//        }
//    }
//}
    
function deleteTree(node) {
    if(node) {
        node.left = deleteTree(node.left);
        node.right = deleteTree(node.right);
        console.log('Delete:' + node.value);
    }
    return null;
}

BinarySearchTree.prototype.delete = function() {
    deleteTree(this.root);
    debugger;
    this.root = null;
}

var bst = new BinarySearchTree();
bst.push(bst.root, 5);
bst.push(bst.root, 3);
bst.push(bst.root, 7);
bst.push(bst.root, 9);
bst.push(bst.root, 4);
bst.push(bst.root, 1);
bst.push(bst.root, 6);
//
//var bst2 = new BinarySearchTree();
//bst2.push(15);
//bst2.push(13);
//bst2.push(11);
//bst2.push(20);


function dfs(node){
  if(node){
    console.log("dfs:" + node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

function inorder(node) {
    if(node) {
        inorder(node.left);
//        console.log("inorder:" + node.value);
        inorder(node.right);
    }
}

function preorder(node) {
    if(node) {
//        console.log("preorder:" + node.value);
        preorder(node.left);
        preorder(node.right);
    }
}

function postorder(node) {
    if(node) {
        postorder(node.left);
        postorder(node.right);
//        console.log("postorder:" + node.value);
    }
}

dfs(bst.root);
console.log('next');
//dfs(bst2.root);
inorder(bst.root);
preorder(bst.root);
postorder(bst.root);

function minNode(node) {
    if(!node) return 0;
    if(node.left) {
        return minNode(node.left);
    }
    return node.value;
}

function maxNode(node) {
    if(!node) {return 0;}
    if(node.right) {return maxNode(node.right)}
    return node.value;
}

console.log("min:" + minNode(bst.root));
console.log("max:" + maxNode(bst.root));

function height(node){
   if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);
   return Math.max(leftHeight, rightHeight) + 1;
}

console.log("avl:height " + height(bst.root));


function printAncestor(node, target){
   if(!node) return false

   if(node.value == target) return true;
   
   if(printAncestor(node.left, target) || printAncestor(node.right, target)){
//     console.log(node.value);
     return true;
  }

  return false
}
   
console.log("print ancestors " + printAncestor(bst.root,3)); 

