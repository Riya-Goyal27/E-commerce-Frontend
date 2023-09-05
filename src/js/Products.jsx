import React, { useState, useRef, useEffect } from 'react'
import Path from './Path'
import { Link, Outlet } from 'react-router-dom'
import data from './data'
import { BsGridFill } from "react-icons/bs";
import { FaBars, FaSearch } from "react-icons/fa";
import {TiTick} from 'react-icons/ti'
import Header from './Header';
import { Title } from 'react-admin';

const Products = ({cartItems, filters, searchValue, maxPrice, setSearchValue, categoryIndex, setCategoryIndex, range, setRange, allColors, setAllColors, colorIndex, setColorIndex, freeShippingChecked, setFreeShippingChecked, companyValue, setCompanyValue, isGrid, setIsGrid}) => {

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

  const [newdata, setNewdata] = useState([...data]);
  const [sortValue, setSortValue] = useState('name-a')

  const sortData = (e) => {
    let sortedData = [...newdata];
    if(e.target.value == 'price-lowest'){
      sortedData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(e.target.value == 'price-highest'){
      sortedData.sort((a, b) => {
        return b.price - a.price;
      });
    }else if(e.target.value == 'name-a'){
      sortedData.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
    }else{
      sortedData.sort((a, b) => {
        return (b.title > a.title ? 1 : -1);
      });
    }
    setSortValue(e.target.value);
    setNewdata(sortedData);
  }

  const filterData = () => {
    setSortValue('name-a');
    let filteredData = data.filter(item => {
      const isCategory = item.category.some(subitem => subitem == filters.current.category);
      if(isCategory)
      return item;
    })
    if(filters.current.company != 'all'){
      filteredData = filteredData.filter(item => item.brand == filters.current.company)
    }
    if(filters.current.color != 'all'){
      filteredData = filteredData.filter(item => {
        const isColor = item.colors.some(subitem => subitem == filters.current.color);
        if(isColor)
        return item;
      })
    }
    filteredData = filteredData.filter(item => item.price <= filters.current.price);
    if(filters.current.freeShipping){
      filteredData = filteredData.filter(item => item.freeShipping == true)
    }
    filteredData = filteredData.filter(item => {
      const wordsArray = item.title.split(" ");
      let isContain = false;
      wordsArray.forEach(word => {
        if(word.toLowerCase().indexOf(filters.current.search.toLowerCase())==0){
          isContain=true;
        }
      })
      return isContain;
    })
    setNewdata(filteredData);
  }
  useEffect(() => {
    filterData();
    document.title="Products"
  }, [])

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    filters.current.search = e.target.value;
    console.log(filters.current.search);
    filterData();
  }

  const handleClickCategory = (e, index) => {
    setCategoryIndex(index);
    filters.current.category = e.target.innerText;
    filterData();
  }

  const handleChangeCompany = (e) => {
    setCompanyValue(e.target.value);
    filters.current.company = e.target.value;
    filterData();
  }

  const handleClickAllColor = (e) => {
    setAllColors(true);
    setColorIndex(-1);
    filters.current.color = 'all';
    filterData();
  }

  const handleClickColor = (e, index, color) => {
    setAllColors(false);
    setColorIndex(index);
    filters.current.color = color;
    filterData();
  }

  const handleChangePrice = (e) => {
    setRange(e.target.value);
    filters.current.price = e.target.value;
    filterData();
  }

  const handleChangeFreeShipping = (e) => {
    setFreeShippingChecked(!freeShippingChecked);
    filters.current.freeShipping = e.target.checked;
    filterData();
  }

  const handleClickClearFilters = () => {
    let clearedData = [...data];
    if(sortValue == 'price-lowest'){
      clearedData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(sortValue == 'price-highest'){
      clearedData.sort((a, b) => {
        return b.price - a.price;
      });
    }else if(sortValue == 'name-a'){
      clearedData.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
    }else{
      clearedData.sort((a, b) => {
        return (b.title > a.title ? 1 : -1);
      });
    }
    setNewdata([...clearedData]);
    filters.current.search = '';
    filters.current.category = 'All';
    filters.current.company = 'all';
    filters.current.color = 'all';
    filters.current.price = maxPrice;
    filters.current.freeShipping = false;
    setCategoryIndex(0);
    setCompanyValue('all');
    setAllColors(true);
    setColorIndex(-1);
    setRange(maxPrice);
    setFreeShippingChecked(false);
    setSearchValue('');
  }

  return (
    <>
      <Header cartItems={cartItems}/>
      <Path title="products" />
      <div>
        <div className='grid grid-cols-[200px_1fr] max-surface-duo:grid-cols-1 gap-6 w-[95vw] mx-auto my-16 max-w-[1170px]'>
          <section>
            <div className='sticky top-4'>
              <form onSubmit={e => e.preventDefault()}>
                <div className='mb-5'>
                  <input type='text' placeholder='Search' className='p-2 bg-[#f1f5f8] rounded border-0 tracking-[0.1rem] outline-0 max-surface-duo:w-[95vw]' value={searchValue} onChange={handleChangeSearch}/>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>Category</h5>
                  <div className='max-surface-duo:grid grid-cols-[150px_150px] items-center justify-around '>
                    { categories.map((item, index) => {
                      if(index == categoryIndex)
                        return <button type='button' className='block my-[0.25em] py-1.5 capitalize bg-transparent border-0 border-[#617d98] text-[#617d98] cursor-pointer tracking-[0.1rem] leading-none border-b' key={index} onClick={(e) => handleClickCategory(e, index)}>{item}</button>
                      else
                        return <button type='button' className='block my-[0.25em] py-1.5 capitalize bg-transparent border-0 border-[#617d98] text-[#617d98] cursor-pointer tracking-[0.1rem] leading-none' key={index} onClick={(e) => handleClickCategory(e, index)}>{item}</button>
                      })
                    }
                  </div>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>company</h5>
                  <select className='bg-[#f1f5f8] rounded border-0 p-1 outline-0 max-surface-duo:w-[95vw]' onChange={handleChangeCompany} value={companyValue}>
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
                              <button type='button' className={`w-4 h-4 rounded-full cursor-pointer mr-2 border-0 bg-[${item}] opacity-50 flex items-center justify-center`} key={index} onClick={(e) => handleClickColor(e, index, item)}>
                                <TiTick color='#fff' size="0.8rem"/>
                              </button>
                            )
                          }
                          return (
                            <button type='button' className={`w-4 h-4 rounded-full cursor-pointer mr-2 border-0 bg-[${item}] opacity-50 flex items-center justify-center`} key={index} onClick={(e) => handleClickColor(e, index, item)}></button>
                          )
                      }
                    )}
                  </div>
                </div>
                <div className='mb-5'>
                  <h5 className='mb-2 tracking-[0.1rem] leading-tight capitalize font-bold'>price</h5>
                  <p className='mb-1 text-[#324d67]'>${range}</p>
                  <input type="range" min="0" max={maxPrice} step="0.01" value={range} onChange={handleChangePrice} className='max-surface-duo:w-[95vw]'/>
                </div>
                <div className='mb-5 grid grid-cols-[auto_1fr] items-center capitalize gap-2 font-bold'>
                  <label for="shipping">free shipping</label>
                  <input type="checkbox" name="shipping" onChange={handleChangeFreeShipping} checked={freeShippingChecked} className='max-surface-duo:w-[100px]'/>
                </div>
              </form>
              <button type='button' className='block my-1 capitalize border-0 tracking-[0.1rem] cursor-pointer px-2 py-1 rounded text-white bg-yellow-700 max-surface-duo:mx-auto' onClick={handleClickClearFilters}>clear filters</button>
            </div>
          </section>
          <div>
            <section className='grid grid-cols-[auto_auto_1fr_auto] max-iphone:grid-cols-[auto_1fr_auto] items-center mb-8 gap-8 max-iphone:gap-2'>
              <div className='grid grid-cols-2 gap-2 max-iphone:hidden'>
                <button className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer border border-neutral-800 ${isGrid ? 'bg-neutral-800' : 'bg-[#fff]'}`} onClick={() => setIsGrid(true)}>
                  <BsGridFill color={isGrid ? '#fff' : '#222'} />
                </button>
                <button className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer border border-neutral-800 ${isGrid ? 'bg-[#fff]' : 'bg-neutral-800'}`} onClick={() => setIsGrid(false)}>
                  <FaBars color={isGrid ? '#222' : '#fff'} />
                </button>
              </div>
              <p className='capitalize text-[#324d67]'><span>{newdata.length} </span>products found</p>
              <hr className='border-0 border-t border-slate-300'/>
              <form>
                <label for="sort" className='capitalize'>sort by</label>
                <select className='border-0 capitalize py-1 px-2 outline-0' onChange={sortData} value={sortValue}>
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">name (a-z)</option>
                  <option value="name-z">name (z-a)</option>
                </select>
              </form>
            </section>
            <DataEmpty newdata={newdata} isGrid={isGrid}/>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

const DataEmpty = ({newdata, isGrid}) => {
  if(newdata.length == 0){
    return (
      <h5 className='font-bold tracking-[0.1rem] leading-tight mb-3'>Sorry, no products matched your search.</h5>
    )
  }
  return (
    <CheckGrid newdata={newdata} isGrid={isGrid} />
  )
}

const CheckGrid = ({newdata, isGrid}) => {
  if(isGrid){
    return (
    <section> 
      <div className='grid grid-cols-3 max-tablet:grid-cols-2 gap-x-6 gap-y-8 max-iphone:grid-cols-1'>
        { newdata.map((item, index) => <GridView title={item.title} price={item.price} url={item.images[0]} id={item.id} key={item.id}/>) }
      </div>
    </section>
    )
  }
  return (
    <section>
      <div className='grid gap-y-12'>
        { newdata.map((item, index) => <ListView title={item.title} price={item.price} url={item.images[0]} id={item.id} description={item.description}/>) }
      </div>
    </section>
  )
}

const GridView = ({title, price, url, id}) => {
  return (
      <article>
        <div className='relative rounded overflow-hidden'>
          <img src={`/assets/${url}.jpeg`} alt={title} className='w-full h-[175px] block object-cover'/>
          <Link to={`${id}`} className='inline-block absolute w-full h-[175px] top-0 left-0 bg-black/40 opacity-0 hover:opacity-100 transition linear duration-300 cursor-pointer'>
            <div className='h-10 w-10 rounded-full bg-yellow-700 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center'>
              <FaSearch color='#fff' size='20px' />
            </div>
          </Link>
        </div>
        <footer className='flex justify-between items-center mt-4 capitalize tracking-[0.1rem] leading-tight'>
          <h5>{title}</h5>
          <p className='text-yellow-700'>${price}</p>
        </footer>
      </article>
  )
}

const ListView = ({title, price, url, id, description}) => {
  return (
    <article className='grid grid-cols-[auto_1fr] gap-x-8 items-center' key={id}>
      <Link to={`${id}`}>
        <img src={`/assets/${url}.jpeg`} alt={title} className='block w-[300px] h-[200px] object-cover rounded mb-4 max-tablet:mb-0' />
      </Link>
      <div>
        <h4 className='text-[1.5rem] max-tablet:text-[1.2rem] mb-2 max-tablet:mb-0 font-bold tracking-[0.1rem] capitalize'>{title}</h4>
        <h5 className='text-yellow-700 mb-3 max-tablet:mb-2 leading-tight tracking-[0.1rem]'>${price}</h5>
        <p className='max-w-[45em] text-[#324d67] mb-4 max-tablet:hidden'>{description.substring(0, 150) + '...'}</p>
        <p className='max-w-[45em] text-[#324d67] mb-2 hidden max-tablet:block max-tablet:text-[0.85rem]'>{description.substring(0, 95) + '...'}</p>
        <Link to={`${id}`} className='text-[0.5rem] py-1 px-2 bg-yellow-700 rounded shadow-md text-custom-text cursor-pointer inline-block tracking-[0.1rem] transition linear duration-300 hover:bg-custom-text hover:text-yellow-700 uppercase'>details</Link>
      </div>
    </article>
  )
}

export default Products
