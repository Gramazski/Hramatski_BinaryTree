'use strict';

class BinaryTree {
	constructor() {
		this.root=null;
	}

	insert(data) {

		function insertToList(CurrObject, data){
			if (CurrObject==null)
			{
				var tempObject = {data : 1, right : null, left : null};
				CurrObject=tempObject;
				CurrObject.data=data;
			}
			else
			{
				if (CurrObject.data<data)
				{
					CurrObject.right=insertToList(CurrObject.right, data);
				}
				else
				{
					CurrObject.left=insertToList(CurrObject.left, data);
				}
			}
			return CurrObject;

		}

		if (this.root==null)
		{
			var tempObject = {data : 1, right : null, left : null};
			this.root=tempObject;
			this.root.data=data;
		}
		else
		{
			if (this.root.data<data)
			{
				this.root.right=insertToList(this.root.right, data);
			}
			else
			{
				this.root.left=insertToList(this.root.left, data);
			}
		}

	}

	contains(data) {
		function findData(CurrObject, data){
			if (CurrObject==null)
			{
				return false;
			}
			if (CurrObject.data==data)
			{
				return true;
			}
			else
			{
				if (CurrObject.data<data)
				{
					return findData(CurrObject.right, data);
				}
				else
				{
					return findData(CurrObject.left, data);
				}
			}
		}
		return findData(this.root, data);

	}

	remove(data) {
		function findNode(CurrObject, data){
			if (CurrObject.data==data)
			{
				CurrObject=CurrObject.left;
			}
			else
			{
				if (CurrObject.data<data)
				{
					CurrObject.right=findNode(CurrObject.right, data);
				}
				else
				{
					CurrObject.left=findNode(CurrObject.left, data);
				}
			}
			return CurrObject;
		}

		if (this.contains(data)){
			this.root=findNode(this.root,data);
		}

	}

	size() {
		function traversalOfTree(CurrObject){
			if (CurrObject.left!=null)
			{
				traversalOfTree(CurrObject.left);
			}
			if (CurrObject.right!=null)
			{
				traversalOfTree(CurrObject.right);
			}

			TreeSize++;
		}

		var TreeSize=0;
		if (this.root!=null) {
			traversalOfTree(this.root);
		}
		return TreeSize;
	}

	isEmpty() {
		if (this.root==null)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
