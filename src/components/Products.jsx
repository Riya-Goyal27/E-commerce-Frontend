import React, { useState, useEffect } from 'react'
import Path from './Path'
import { Outlet } from 'react-router-dom'
import data from '../data'
import { BsGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {TiTick} from 'react-icons/ti'
import DataEmpty from './DataEmpty';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryIndex, setSearchValue, setCompanyValue, setRange, setColorIndex, setFreeShippingChecked, setAllColors, setIsGrid, setProductsData, setSortValue } from '../features/filter/filterSlice';


const Products = () => {

  const dispatch = useDispatch();
  const {searchValue, categoryIndex, companyValue, range, maxPrice, colorIndex, freeShippingChecked, allColors, isGrid, productsData, sortValue} = useSelector(store => store.filter);
  
  const companies = Array.from(new Set(
    data.map(item => item.brand)
  ))
  companies.unshift('all');

  let categories = new Set();
  data.map(item => item.category).forEach(item => {
    item.forEach(subitem =>categories.add(subitem))
  })
  categories = Array.from(categories);

  let colors = new Set();
  data.map(item => item.colors).forEach(item => {
    item.forEach(subitem =>colors.add(subitem))
  })
  colors = Array.from(colors);

  const filterData = () => {
    let filteredData = data.filter(item => {
      const isCategory = item.category.some(subitem => subitem == categories[categoryIndex]);
      if(isCategory)
      return item;
    })
    if(companyValue != 'all'){
      filteredData = filteredData.filter(item => item.brand == companyValue)
    }
    if(allColors == false){
      filteredData = filteredData.filter(item => {
        const isColor = item.colors.some(subitem => subitem == colors[colorIndex]);
        if(isColor)
        return item;
      })
    }
    filteredData = filteredData.filter(item => item.price <= range);
    if(freeShippingChecked){
      filteredData = filteredData.filter(item => item.freeShipping == true)
    }
    filteredData = filteredData.filter(item => {
      const wordsArray = item.title.split(" ");
      let isContain = false;
      wordsArray.forEach(word => {
        if(word.toLowerCase().indexOf(searchValue.toLowerCase())==0){
          isContain=true;
        }
      })
      return isContain;
    })
    if(sortValue == 'price-lowest'){
      filteredData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(sortValue == 'price-highest'){
      filteredData.sort((a, b) => {
        return b.price - a.price;
      });
    }else if(sortValue == 'name-a'){
      filteredData.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
    }else{
      filteredData.sort((a, b) => {
        return (b.title > a.title ? 1 : -1);
      });
    }
    dispatch(setProductsData(filteredData))
  }

  const sortData = () => {
    let sortedData = [...productsData];
    if(sortValue == 'price-lowest'){
      sortedData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(sortValue == 'price-highest'){
      sortedData.sort((a, b) => {
        return b.price - a.price;
      });
    }else if(sortValue == 'name-a'){
      sortedData.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
    }else{
      sortedData.sort((a, b) => {
        return (b.title > a.title ? 1 : -1);
      });
    }
    dispatch(setProductsData(sortedData));
  }

  useEffect(() => {
    document.title="Products"
  })

  useEffect(() => {
    filterData();
  }, [categoryIndex, companyValue, colorIndex, range, freeShippingChecked, searchValue])

  useEffect(() => {
    sortData();
  }, [sortValue])

  const handleClickAllColor = () => {
    dispatch(setAllColors(true))
    dispatch(setColorIndex(-1))
  }

  const handleClickColor = (index) => {
    dispatch(setAllColors(false))
    dispatch(setColorIndex(index))
  }

  const handleClickClearFilters = () => {
    dispatch(setProductsData(data));
    dispatch(setSearchValue(''));
    dispatch(setCategoryIndex(0));
    dispatch(setCompanyValue('all'));
    dispatch(setAllColors(true));
    dispatch(setColorIndex(-1));
    dispatch(setRange(maxPrice));
    dispatch(setFreeShippingChecked(false))
  }

  return (
    <>
      <Path title="products" />
      <div>
        <div className='grid grid-cols-[200px_1fr] max-surface-duo:grid-cols-1 gap-6 w-[95vw] mx-auto my-16 max-w-[1170px]'>
          <section>
            <div className='sticky top-4'>
              <form onSubmit={e => e.preventDefault()}>
                <div className='mb-5'>
                  <input type='text' placeholder='Search' className='p-2 bg-[#f1f5f8] rounded border-0 tracking-[0.1rem] outline-0 max-surface-duo:w-[95vw]' value={searchValue} onChange={e => dispatch(setSearchValue(e.target.value))}/>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>Category</h5>
                  <div className='max-surface-duo:grid grid-cols-[150px_150px] items-center justify-around '>
                    { categories.map((item, index) => {
                      if(index == categoryIndex)
                        return <button type='button' className='block my-[0.25em] py-1.5 capitalize bg-transparent border-0 border-[#617d98] text-[#617d98] cursor-pointer tracking-[0.1rem] leading-none border-b' key={index} onClick={() => dispatch(setCategoryIndex(index))}>{item}</button>
                      else
                        return <button type='button' className='block my-[0.25em] py-1.5 capitalize bg-transparent border-0 border-[#617d98] text-[#617d98] cursor-pointer tracking-[0.1rem] leading-none' key={index} onClick={() => dispatch(setCategoryIndex(index))}>{item}</button>
                      })
                    }
                  </div>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>company</h5>
                  <select className='bg-[#f1f5f8] rounded border-0 p-1 outline-0 max-surface-duo:w-[95vw]' onChange={e => dispatch(setCompanyValue(e.target.value))} value={companyValue}>
                    { companies.map((item, index) => <option value={item} key={index}>{item}</option>) }
                  </select>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>colors</h5>
                  <div className='flex items-center'> 
                    <button type='button' className={`block my-[0.25em] pb-1 capitalize bg-transparent border-0 ${allColors ? 'border-b' : ''} border-[#617d98] text-[#617d98] cursor-pointer tracking-[0.1rem] mr-2 pt-[calc(0.25rem+1px)]`} onClick={handleClickAllColor}>all</button>
                    { colors.map((item, index) => {
                          if(index == colorIndex){
                            return (
                              <button type='button' className={`w-4 h-4 rounded-full cursor-pointer mr-2 border-0 bg-[${item}] opacity-50 flex items-center justify-center`} key={index} onClick={() => handleClickColor(index)}>
                                <TiTick color='#fff' size="0.8rem"/>
                              </button>
                            )
                          }
                          return (
                            <button type='button' className={`w-4 h-4 rounded-full cursor-pointer mr-2 border-0 bg-[${item}] opacity-50 flex items-center justify-center`} key={index} onClick={() => handleClickColor(index)}></button>
                          )
                      }
                    )}
                  </div>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>price</h5>
                  <p className='mb-1 text-[#324d67]'>${range}</p>
                  <input type="range" min="0" max={maxPrice} step="0.01" value={range} onChange={e => dispatch(setRange(e.target.value))} className='max-surface-duo:w-[95vw]'/>
                </div>
                <div className='mb-5 grid grid-cols-[auto_1fr] items-center capitalize gap-2 font-bold'>
                  <label for="shipping">free shipping</label>
                  <input type="checkbox" name="shipping" onChange={() => dispatch(setFreeShippingChecked(!freeShippingChecked))} checked={freeShippingChecked} className='max-surface-duo:w-[100px]'/>
                </div>
              </form>
              <button type='button' className='block my-1 capitalize border-0 tracking-[0.1rem] cursor-pointer px-2 py-1 rounded text-white bg-yellow-700 max-surface-duo:mx-auto' onClick={handleClickClearFilters}>clear filters</button>
            </div>
          </section>
          <div>
            <section className='grid grid-cols-[auto_auto_1fr_auto] max-iphone:grid-cols-[auto_1fr_auto] items-center mb-8 gap-8 max-iphone:gap-2'>
              <div className='grid grid-cols-2 gap-2 max-iphone:hidden'>
                <button className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer border border-neutral-800 ${isGrid ? 'bg-neutral-800' : 'bg-[#fff]'}`} onClick={() => dispatch(setIsGrid(true))}>
                  <BsGridFill color={isGrid ? '#fff' : '#222'} />
                </button>
                <button className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer border border-neutral-800 ${isGrid ? 'bg-[#fff]' : 'bg-neutral-800'}`} onClick={() => dispatch(setIsGrid(false))}>
                  <FaBars color={isGrid ? '#222' : '#fff'} />
                </button>
              </div>
              <p className='capitalize text-[#324d67]'><span>{productsData.length} </span>products found</p>
              <hr className='border-0 border-t border-slate-300'/>
              <form>
                <label for="sort" className='capitalize'>sort by</label>
                <select className='border-0 capitalize py-1 px-2 outline-0' onChange={e => dispatch(setSortValue(e.target.value))} value={sortValue}>
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">name (a-z)</option>
                  <option value="name-z">name (z-a)</option>
                </select>
              </form>
            </section>
            <DataEmpty />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Products
