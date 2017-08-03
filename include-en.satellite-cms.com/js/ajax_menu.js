var open_obj = new Array()

function Expand(obj,checkbox) {
var obj2 = obj;
var img_obj = "img_" + obj;
var div_obj = "div_" + obj;
var check_obj = "check_" + obj;

if (open_obj[obj] == true) 
	{if (checkbox != "1") 
		{if(document.getElementById(div_obj)){document.getElementById(div_obj).style.display = "none";}
		 if(document.getElementById(img_obj)){document.getElementById(img_obj).src = "https://include-de.satellite-cms.com/images/icons/collapsed.gif";}
		 open_obj[obj] = false;
		}
	} 
else 
	{if(document.getElementById(div_obj)){document.getElementById(div_obj).style.display = "block";}
	 if(document.getElementById(img_obj)){document.getElementById(img_obj).src = "https://include-de.satellite-cms.com/images/icons/expanded.gif";}
	 open_obj[obj] = true;
	}

if (checkbox == "1") 
	{var checkboxes = document.forms["form"].elements[check_obj];
	 for (var i = 0; i < checkboxes.length; i++) 
	 	{if (checkboxes[i].checked == true) 
			{checkboxes[i].checked = false;
			} 
		 else 
		 	{checkboxes[i].checked = true;
			}
		}
	}
}


function insertForms(gid,name,description,parent,gallery_only,active,uid,group_icon) {
	 document.forms.groups.delete_group.checked = false;
	 document.forms.groups.new_group.checked = false;
	 document.getElementById('gid').value = gid;
	 document.getElementById('group_title').value = name;
	 document.getElementById('group_description').value = description;
	 if(group_icon != '')
	 	{document.getElementById('group_icon').value = group_icon;
		}
	 document.getElementById('parent').value = parent;

	 if(active == 1)
	 	{document.getElementById('active').checked = true;}
	 else
	 	{document.getElementById('active').checked = false;}
	 if(uid != '')
	 	{document.getElementById('uid').value = uid;}
	 if(gallery_only == 1)
	 	{document.getElementById('gallery_only').checked = true;}
	 else
	 	{document.getElementById('gallery_only').checked = false;}
	 
}


function insertImageForms(gid,name,description,parent,active) {
	 document.forms.category.delete_category.checked = false;
	 document.forms.category.new_category.checked = false;
	 document.getElementById('gid').value = gid;
	 document.getElementById('group_title').value = name;
	 document.getElementById('group_description').value = description;
	 document.getElementById('parent').value = parent;
	 if(active == 1)
	 	{document.getElementById('active').checked = true;}
	 else
	 	{document.getElementById('active').checked = false;}
}

function insertProductForms(cid,name,description,url) {
	 document.forms.category.delete_category.checked = false;
	 document.forms.category.new_category.checked = false;
	 document.getElementById('cid').value = cid;
	 document.getElementById('cat_name').value = name;
	 document.getElementById('cat_description').value = description;
	 document.getElementById('url').value = url;
}

function insertDateForms(cid,name,description,color,permalink) {
	 document.forms.category.delete_category.checked = false;
	 document.forms.category.new_category.checked = false;
	 document.getElementById('cid').value = cid;
	 document.getElementById('cat_name').value = name;
	 document.getElementById('cat_description').value = description;
	 document.getElementById('color').value = color;
	 document.getElementById('permalink').value = permalink;
}

function insertFinderForms(cid,name,description,permalink) {
	 document.forms.category.delete_category.checked = false;
	 document.forms.category.new_category.checked = false;
	 document.getElementById('cid').value = cid;
	 document.getElementById('catname').value = name;
	 document.getElementById('catdescription').value = description;
	 document.getElementById('permalink').value = permalink;
}