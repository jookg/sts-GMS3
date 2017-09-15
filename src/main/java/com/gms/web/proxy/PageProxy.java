package com.gms.web.proxy;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import lombok.Data;

@Data @Component
public class PageProxy{
   
   private int pageSize,blockSize,theNumberOfRows,pageNumber;
   
   public void execute(int[] arr,List<?>list, Model model){
	   model.addAttribute("pageNumber", arr[0]);
	   model.addAttribute("theNumberOfPages", arr[1]);
	   model.addAttribute("startPage",arr[2]);
	   model.addAttribute("endPage",arr[3]);
	   model.addAttribute("prevBlock", arr[4]);
	   model.addAttribute("endBlock",arr[5]);
	   model.addAttribute("blockSize", blockSize);
	   model.addAttribute("list",list);
      //System.out.println(arr[1]+":"+arr[2]+":"+arr[3]+":"+arr[4]+":"+arr[5]);
      
   }

}